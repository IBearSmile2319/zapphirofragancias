const Admin = require("../models/mongo/Admin/Admin.model");
const bcrypt = require("bcryptjs");
const { generateJWT } = require("../helper/jwt");

exports.adminRegister = async (req, res, next) => {

    const { username, firstName, lastName, email, password, role } = req.body;
    const existEmail = await Admin.findOne({ email });

    if (existEmail) {
        return res.status(400).json({
            success: false,
            error: "El usuario ya existe verificar"
        })
    }
    const admin = new Admin({
        username,
        firstName,
        lastName,
        email,
        password,
        role
    })
    // encriptar password
    const salt = await bcrypt.genSaltSync()
    admin.password = await bcrypt.hash(password, salt);
    // guardar en la base de datos
    await admin.save((err, admin) => {
        if (err) {
            return res.status(400).json({
                success: false,
                error: err
            })
        }
        if (admin) {
            return res.status(201).json({
                success: true,
                message: "Usuario creado correctamente",
                data: admin
            })
        }
    })
}
exports.adminLogin = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const userAndEmail = email.includes("@");

        await Admin.findOne(userAndEmail ? { email } : { username: email })
            .populate("role")
            .exec(async (err, admin) => {
                if (err) {
                    return res.status(400).json({
                        success: false,
                        error: err
                    })
                }
                if (admin) {
                    if (bcrypt.compareSync(password, admin.password)) {
                
                        const token = await generateJWT({
                            uid: admin._id,
                            role: admin.role.name
                        }, process.env.JWT_SECRET_ADMIN, process.env.JWT_EXPIRES_ADMIN_IN);
                        return res.status(200).json({
                            success: true,
                            message: "Usuario logueado correctamente",
                            data: {
                                token,
                                admin
                            }
                        })
                    } else {
                        return res.status(400).json({
                            success: false,
                            error: `El ${userAndEmail ? "correo" : "usuario"} o contraseña son incorrectos`
                        })
                    }
                } else {
                    return res.status(400).json({
                        success: false,
                        error: "El usuario o contraseña son incorrectos"
                    })
                }
            }
            )
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: "Error al autenticar el usuario",
            error: err
        })
    }
}

// renew token
exports.adminRenewToken = async (req, res, next) => {
    try {
        const { uuid } = req.body;
        // Generar nuevo token
        const token = await generateJWT(uuid, process.env.JWT_SECRET_ADMIN, process.env.JWT_EXPIRES_ADMIN_IN);

        // Obtener el usuario for uuid
        await Admin.findOne({ uuid })
            .exec((err, admin) => {
                if (err) {
                    return res.status(500).json({
                        success: false,
                        message: "Error al renovar el token",
                        error: err
                    })
                }
                if (!admin) {
                    return res.status(400).json({
                        success: false,
                        message: "El usuario no existe"
                    })
                }
                return res.status(200).json({
                    success: true,
                    message: "Token renovado correctamente",
                    data: {
                        token,
                        admin
                    }
                })
            })
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: "Error al renovar el token",
            error: err
        })
    }
}
