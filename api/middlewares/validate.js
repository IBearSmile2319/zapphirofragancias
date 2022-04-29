const {validationResult} = require('express-validator');

validate = (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({
            success: false,
            error: errors.mapped()
        })
    }
    next();
}

module.exports = validate;