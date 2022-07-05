const UserModel = require('../models/mongo/user/User.model');

exports.userConnection = async (uid) => {
    const user = await UserModel.findById(uid);
    user.online = true;
    await user.save();
    return user;
}

exports.userDisconnection = async (uid) => {
    const user = await UserModel.findById(uid);
    user.online = false;
    await user.save();
    return user;
}