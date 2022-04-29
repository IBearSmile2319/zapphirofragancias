
const userValidator = require('./user.validator');
const adminValidator = require('./admin.validator');
const validators ={
    user: userValidator,
    admin: adminValidator
}

module.exports = validators;