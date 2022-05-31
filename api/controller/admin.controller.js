const Admin = require("../models/mongo/Admin/Admin.model");
const bcrypt = require("bcryptjs");
const { generateJWT } = require("../helper/jwt");
const { AdminCreateSession } = require("../service/session.service");

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
                admin
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
                        error: "Error al iniciar sesión",
                    })
                }
                if (!admin) {
                    return res.status(400).json({
                        success: false,
                        error: `El ${userAndEmail ? "correo" : "usuario"} o contraseña son incorrectos`
                    })
                }
                if (admin) {
                    if (bcrypt.compareSync(password, admin.password)) {
                        const session = await AdminCreateSession(
                            admin._id,
                            req.get("user-agent") || "",
                            req.header('x-forwarded-for') || req.connection.remoteAddress
                        );
                        const token = await generateJWT({
                            uid: admin._id,
                            role: admin.role.name,
                            session: session._id
                        }, process.env.JWT_SECRET_ADMIN, process.env.JWT_EXPIRES_ADMIN_IN);
                        return res.status(200).json({
                            success: true,
                            message: "Usuario logueado correctamente",
                            token,
                            admin
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

// renew token
exports.adminRenewToken = async (req, res, next) => {
    try {
        // Generar nuevo token
        const token = await generateJWT({
            uid: req.uid,
            role: req.role
        }, process.env.JWT_SECRET_ADMIN, process.env.JWT_EXPIRES_ADMIN_IN);

        // Obtener el usuario for uuid
        await Admin.findOne({ _id: req.uid })
            .populate("role")
            .exec((err, admin) => {
                if (err) {
                    return res.status(500).json({
                        success: false,
                        error: "Error al renovar el token",
                    })
                }
                if (!admin) {
                    return res.status(200).json({
                        success: false,
                        error: "El usuario no existe"
                    })
                }
                return res.status(200).json({
                    success: true,
                    message: "Token renovado correctamente",
                    token,
                    admin
                })
            })
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: "Error al renovar el token",
        })
    }
}
