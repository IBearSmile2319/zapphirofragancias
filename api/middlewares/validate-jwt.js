const jwt = require('jsonwebtoken');

exports.validateJWT = (req, res, next) => {
    try {
        const token = req.header('x-access-token') || req.header('authorization');
        token = token.replace('Bearer ', '');
        if (!token) {
            return res.status(401).json({
                ok: false,
                msg: 'No token provided'
            })
        }
        const { uid } = jwt.verify(token, process.env.JWT_SECRET);
        req.uid = uid;
        next()
    } catch (e) {
        res.status(401).json({
            ok: false,
            msg: "Token invalido"
        })
    }
};

exports.validateAdminJWT = (req, res, next) => {
    try {
        let token = req.header('x-access-token') || req.header('authorization');
        token = token.replace('Bearer ', '');
        if (!token) {
            return res.status(401).json({
                ok: false,
                msg: 'No token provided'
            })
        }
        const { uid, role } = jwt.verify(token, process.env.JWT_SECRET_ADMIN);
        req.uid = uid;
        req.role = role;
        next()
    } catch (e) {
        res.status(401).json({
            ok: false,
            msg: "Token invalido"
        })
    }
};

exports.adminMiddleware = (req, res,next) => {
    if (req.role !== 'Admin') {
        return res.status(401).json({
            ok: false,
            msg: 'No tiene permisos para acceder a este recurso'
        })
    }
    next()
}
