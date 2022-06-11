



exports.saveUserService = async (newUser) => {
    return new Promise((resolve, reject) => {
        newUser.save((err, user) => {
            if (err) {
                reject(err);
            }
            if (user) {
                resolve(user);
            }
        });
    });
}
