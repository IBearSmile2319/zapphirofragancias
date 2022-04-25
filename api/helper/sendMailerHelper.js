const nodemailer = require('nodemailer');

const SendMail = async (html, subject, to) => {
    // smtp outlock
    const transporter = nodemailer.createTransport({
        host: 'smtp-mail.outlook.com',
        port: 587,
        secure: false,
        auth: {
            user: 'maicolgamer232319@hotmail.com',
            pass: 'miyala12345T'
        }
    });
    // mail options

    const mailOptions = {
        from: 'maicolgamer232319@hotmail.com',
        to,
        subject,
        html

    };

    const info = await transporter.sendMail(mailOptions);
    return info;
}


module.exports = SendMail;