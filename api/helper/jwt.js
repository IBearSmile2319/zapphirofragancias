const jwt = require('jsonwebtoken')

exports.generateJWTAdmin = (porps) => {
    return new Promise((resolve, reject) => {
        jwt.sign(
            porps,
            process.env.JWT_SECRET_ADMIN,
            { expiresIn: process.env.JWT_EXPIRES_ADMIN_IN },
            (err, token) => {
                if (err) {
                    reject("Error al generar el Token")
                } else {
                    resolve(token)
                }
            })
    })
}

exports.verifyJWTAdmin = (token) => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, process.env.JWT_SECRET_ADMIN, (err, decoded) => {
            if (err) {
                reject("Error al verificar el Token")
            } else {
                resolve(decoded)
            }
        })
    })
}
exports.compareJWTAdmin = (token) => {
    try {
        const { uid } = jwt.verify(token, process.env.JWT_SECRET_ADMIN);
        return [true, uid];
    } catch (e) {
        return [false, null];
    }
}


// user

exports.generateJWTUser = (porps,expired=process.env.JWT_EXPIRES_IN) => {
    return new Promise((resolve, reject) => {
        jwt.sign(
            porps,
            process.env.JWT_SECRET,
            { expiresIn: expired },
            (err, token) => {
                if (err) {
                    reject("Error al generar el Token")
                } else {
                    resolve(token)
                }
            })
    })
}