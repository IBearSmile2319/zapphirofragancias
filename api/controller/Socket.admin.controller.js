const Admin = require('../models/mongo/Admin/Admin.model.js')

exports.adminConnection = async (uid) => {
    const admin = await Admin.findById(uid)
    admin.online=true
    await admin.save()
    return admin
}

exports.adminDisconnection = async (uid) => {
    const admin = await Admin.findById(uid)
    admin.online=false
    await admin.save()
    return admin
}