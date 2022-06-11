// html sendDataUser
const p_pre_registrer = require("../utils/html/p_pre_registrer");

// jwt generate | decode | verify
const { generateJWTUser } = require("../helper/jwt");

// sendMail
const SendMail = require("../helper/sendMailerHelper");

// model User
const User = require("../models/mongo/user/User.model");

// bcrypt
const bcrypt = require("bcryptjs");

// send email to user
exports.SendDataUser = async (req, res) => {
    try {
        const { firstName, lastName, email, nDocument, phone, promotion } = req.body;
        // verificar que el usuario no exista
        const user = await User.findOne({ email });
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
        await User.findOne(userAndEmail ? { email } : { username: email })
            .populate("range")
            .populate("promotion")
            .populate("afiliates")
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

// forgot password
exports.forgotPassword = async (req, res) => {
    try {
        const { email } = req.body;
        const user = await User.findOne({ email });
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

// reset password
exports.resetPassword = async (req, res) => {
    try {
        const { password, token } = req.body;
        const { uid } = await jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(uid);
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

// renew token user
exports.userRenewToken = async (req, res, next) => {
    try {
        // Generated new token
        const token = await generateJWTUser({
            uid: req.uid,
        });

        // Return info user
        await User.findOne({ _id: req.uid })
            .populate("range")
            .populate("promotion")
            .populate("afiliates")
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




