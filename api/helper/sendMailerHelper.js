const nodemailer = require('nodemailer');

const SendMail = async (html, subject, to) => {
    // smtp outlock
    const transporter = nodemailer.createTransport({
        host: 'mail.montesformen.com',
        port: 465,
        secure: true,
        auth: {
            user: 'test@montesformen.com',
            pass: 'ZF_test_123'
        }
    });
    // mail options

    const mailOptions = {
        from: 'test@montesformen.com',
        to,
        subject,
        html

    };

    const info = await transporter.sendMail(mailOptions);
    return info;
}


module.exports = SendMail;