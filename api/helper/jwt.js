const jwt = require('jsonwebtoken')

exports.generateJWT = (porps,secret,expire) => {
    return new Promise((resolve, reject) => {
        jwt.sign(
            porps,
            secret,
            { expiresIn: expire },
            (err, token) => {
                if (err) {
                    reject("Error al generar el Token")
                } else {
                    resolve(token)
                }
            })
    })
}
exports.verifyJWT = (token) => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if (err) {
                reject("Error al verificar el Token")
            } else {
                resolve(decoded)
            }
        })
    })
}
exports.compareJWT = (token = "") => {
    try {
        const { uid } = jwt.verify(token, process.env.JWT_SECRET);
        return [true, uid];
    } catch (e) {
        return [false, null];
    }
}