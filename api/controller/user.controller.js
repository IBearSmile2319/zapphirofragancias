// html sendDataUser
const p_pre_registrer = require("../utils/html/p_pre_registrer");

// jwt generate | decode | verify
const { generateJWTUser } = require("../helper/jwt");

// sendMail
const SendMail = require("../helper/sendMailerHelper");

// model User
const UserModel = require("../models/mongo/user/User.model");


// bcrypt
const bcrypt = require("bcryptjs");
const AzureUpload = require("../middlewares/AzureUpload");

// send email to user
exports.SendDataUser = async (req, res) => {
    try {
        const { firstName, lastName, email, nDocument, phone, promotion } = req.body;
        // verificar que el usuario no exista
        const user = await UserModel.findOne({ email });
        if (user) {
            return res.status(400).json({
                success: false,
                error: 'El usuario ya existe'
            })
        }
        // generar el token
        const token = await generateJWTUser({
            firstName, lastName, email, nDocument, phone, promotion
        }, process.env.jWT_SECRET_PREREGISTER);
        // send Mail
        const info = await SendMail(p_pre_registrer(`http://localhost:3000/api/user/activate/${token}`), "Activar cuenta",
            email
        );
        if (info) {
            return res.status(200).json({
                success: true,
                message: 'Se ha enviado un correo para validar la cuenta'
            })
        } else {
            return res.status(400).json({
                success: false,
                error: 'No se pudo enviar el correo'
            })
        }

    } catch (error) {
        return res.status(500).json({
            success: false,
            error: 'Error al enviar el correo'
        })

    }
}


exports.userSignIn = async (req, res) => {
    try {
        const { email, password } = req.body;
        const userAndEmail = email.includes("@");
        await UserModel.findOne(userAndEmail ? { email } : { username: email })
            .populate("range")
            .populate("promotion", "username firstName lastName code_invite phone")
            .populate("affiliates")
            .exec(async (err, user) => {
                if (err) {
                    return res.status(400).json({
                        success: false,
                        error: "Error al iniciar sesión",
                    })
                }
                if (!user) {
                    return res.status(400).json({
                        success: false,
                        error: `El ${userAndEmail ? "correo" : "usuario"} o contraseña son incorrectos`
                    })
                }
                if (user) {
                    if (bcrypt.compareSync(password, user.password)) {
                        const token = await generateJWTUser({
                            uid: user._id,
                        });
                        return res.status(200).json({
                            success: true,
                            message: "Sesión iniciada correctamente",
                            token,
                            user
                        })
                    } else {
                        return res.status(400).json({
                            success: false,
                            error: `El ${userAndEmail ? "correo" : "usuario"} o contraseña son incorrectos`
                        })
                    }
                } else {
                    return res.status(200).json({
                        success: false,
                        error: "El usuario o contraseña son incorrectos"
                    })
                }
            }
            )
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: "Error al autenticar el usuario",
        })
    }
}

// renew token user
exports.userRenewToken = async (req, res, next) => {
    try {
        // Generated new token
        const token = await generateJWTUser({
            uid: req.uid,
        });

        // Return info user
        await UserModel.findOne({ _id: req.uid })
            .populate("range")
            .populate("promotion", "username firstName lastName code_invite phone")
            .populate("affiliates")
            .exec(async (err, user) => {
                if (err) {
                    return res.status(200).json({
                        success: false,
                        error: "Error al renovar el token",
                    })
                }
                if (!user) {
                    return res.status(200).json({
                        success: false,
                        error: "El usuario no existe",
                    })
                }
                return res.status(200).json({
                    success: true,
                    message: "Token renovado correctamente",
                    token,
                    user
                })
            })
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: "Error al renovar el token",
        })
    }
}



// public 
exports.userCodeInvite = async (req, res) => {
    try {
        const { code_invite } = req.body;
        await UserModel.findOne({ code_invite })
            .select("firstName lastName _id")
            .exec(async (err, user) => {
                if (err) {
                    return res.status(400).json({
                        success: false,
                        error: "Error al validar el código",
                    })
                }
                if (!user) {
                    return res.status(400).json({
                        success: false,
                        error: "El código no existe",
                    })
                }
                return res.status(200).json({
                    success: true,
                    message: "Código validado correctamente",
                    user
                })
            })
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: "Error al validar el código",
        })
    }
}

// Update user
exports.userUpdate = async (req, res) => {
    try {
        const user = await UserModel.findOne({ _id: req.uid });
        if (!user) {
            return res.status(400).json({
                success: false,
                error: "El usuario no existe",
            })
        }
        const objUser = {
            ...req.body,
        }
        if (objUser.password) {
            if (bcrypt.compareSync(objUser.password, user.password)) {
                return res.status(400).json({
                    success: false,
                    error: "La contraseña actual es la misma",
                })
            }
            const salt = await bcrypt.genSaltSync()
            objUser.password = await bcrypt.hash(objUser.password, salt);
        }
        if (req.file) {
            const imagenProfile = await AzureUpload(req.file, "profiles");
            objUser.avatar = imagenProfile.url;
        }
        await UserModel.findOneAndUpdate({ _id: req.uid }, objUser, { new: true })
            .populate("range")
            .populate("promotion", "username firstName lastName code_invite phone")
            .populate("affiliates")
            .exec(async (err, user) => {
                if (err) {
                    return res.status(400).json({
                        success: false,
                        error: "Error al actualizar el usuario",
                    })
                }
                return res.status(200).json({
                    success: true,
                    message: "Usuario actualizado correctamente",
                    user
                })
            })
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: "Error al actualizar el usuario",

        })
    }
}





// 

// reset password
exports.resetPassword = async (req, res) => {
    try {
        const { password, token } = req.body;
        const { uid } = await jwt.verify(token, process.env.JWT_SECRET);
        const user = await UserModel.findById(uid);
        if (!user) {
            return res.status(400).json({
                success: false,
                error: "El usuario no existe"
            })
        }
        user.password = password;
        await user.save();
        return res.status(200).json({
            success: true,
            message: "Contraseña actualizada correctamente"
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: "Error al actualizar la contraseña"
        })
    }
}


// forgot password
exports.forgotPassword = async (req, res) => {
    try {
        const { email } = req.body;
        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.status(400).json({
                success: false,
                error: "El usuario no existe"
            })
        }
        const token = await generateJWTUser({
            uid: user._id,
        });
        const info = await SendMail(p_pre_registrer(`http://localhost:3000/api/user/reset/${token}`), "Recuperar contraseña",
            email
        );
        if (info) {
            return res.status(200).json({
                success: true,
                message: "Se ha enviado un correo para recuperar la contraseña"
            })
        } else {
            return res.status(400).json({
                success: false,
                error: "No se pudo enviar el correo"
            })
        }
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: "Error al enviar el correo"
        })
    }
}
