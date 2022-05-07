const {body, check,oneOf} = require('express-validator');

const validateRegister = [
    check('firstName', 'El nombre es obligatorio').not().isEmpty(),
    check('lastName', 'El apellido es obligatorio').not().isEmpty(),
    check('email', 'El email es obligatorio').isEmail().normalizeEmail(),
];

// const validateUpdateAdmin = [
//     check('firstName', 'El nombre es obligatorio').not().isEmpty(),
//     check('lastName', 'El apellido es obligatorio').not().isEmpty(),
//     check('email', 'El email es obligatorio').isEmail().normalizeEmail(),
//     check('avatar', 'El avatar es obligatorio').not().isEmpty(),
//     check('username', 'El username es obligatorio').not().isEmpty(),
//     check('role', 'El password es obligatorio').not().isEmpty(),
// ];

const validateLogin = [
    check('email', 'El email es obligatorio').not().isEmpty(),
    check('password', 'El password es obligatorio').not().isEmpty(),
];


module.exports = {
    validateRegister,
    validateLogin,
};