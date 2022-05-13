const { body,check } = require('express-validator');

const validatePreRegister = [
    check('firstName', 'El nombre es obligatorio').not().isEmpty(),
    check('lastName', 'El apellido es obligatorio').not().isEmpty(),
    check('email', 'El email es obligatorio').isEmail().normalizeEmail(),
    check('nDocument', 'El documento es obligatorio').not().isEmpty().isLength({ min: 6 }),
    check('phone', 'El telefono es obligatorio').not().isEmpty().isLength({min:9}),
    // check('promotion', 'El promotor es obligatorio').not().isEmpty(),
];
const validateRegister = [
    check('firstName', 'El nombre es obligatorio').not().isEmpty(),
    check('lastName', 'El apellido es obligatorio').not().isEmpty(),
    check('email', 'El email es obligatorio').isEmail().normalizeEmail(),
    check('nDocument', 'El documento es obligatorio').not().isEmpty().isLength({ min: 6 }),
    check('phone', 'El telefono es obligatorio').not().isEmpty().isLength({min:9}),
    check('range', 'El rango es obligatorio').not().isEmpty(),
    check('promotion', 'El promotor es obligatorio').not().isEmpty(),
]

const validateLogin = [
    check('email', 'El email es obligatorio').not().isEmpty(),
    check('password', 'El password es obligatorio').not().isEmpty(),
];

module.exports = {
    validatePreRegister,
    validateLogin
}