const admin_sessionModel = require("../models/mongo/Admin/admin_session.model");


exports.AdminCreateSession = async (userId, userAgent, ip) => {
    const session = await admin_sessionModel.create({
        user: userId,
        valid: true,
        userAgent: userAgent,
        ip: ip,
    });
    return session;
}