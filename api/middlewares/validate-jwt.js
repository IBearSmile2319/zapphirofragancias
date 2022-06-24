const { verifyJWTAdmin, verifyJWTUser,  } = require('../helper/jwt');

exports.validateJWT =async (req, res, next) => {
    try {
        let token = req.header('x-access-token') || req.header('authorization');
        token = token.replace('Bearer ', '');
        if (!token) {
            return res.status(401).json({
                ok: false,
                msg: 'No token provided'
            })
        }
        const {uid} =await verifyJWTUser(token)
        req.uid = uid;
        next()
    } catch (e) {
        res.status(401).json({
            ok: false,
            msg: "Token invalido",
            error: e
        })
    }
};

exports.validateAdminJWT =async (req, res, next) => {
    try {
        let token = req.header('x-access-token') || req.header('authorization');
        token = token.replace('Bearer ', '');
        if (!token) {
            return res.status(401).json({
                ok: false,
                msg: 'No token provided'
            })
        }
        const { uid, role } =await verifyJWTAdmin(token);
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

exports.adminMiddleware = (req, res, next) => {
    if (req.role !== 'Admin') {
        return res.status(401).json({
            ok: false,
            msg: 'No tiene permisos para acceder a este recurso'
        })
    }
    next()
}
