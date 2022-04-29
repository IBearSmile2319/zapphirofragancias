// html sendDataUser
const p_pre_registrer = require("../utils/html/p_pre_registrer");

// jwt generate | decode | verify
const { generateJWT } = require("../helper/jwt");

// sendMail
const SendMail = require("../helper/sendMailerHelper");

// model User
const User = require("../models/mongo/user/User.model");

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
        const token = await generateJWT({
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

