const { generateJWT } = require("../helper/jwt");
const SendMail = require("../helper/sendMailerHelper");
const User = require("../models/mongo/user/User.model");

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
        const info = await SendMail(
            `<h1>Bienvenido a la plataforma de la empresa</h1>
            <p>Para activar tu cuenta haz click en el siguiente enlace:</p>
            <a href="http://localhost:3000/api/user/activate/${token}">Activar cuenta</a>`,
            'Activar cuenta',
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