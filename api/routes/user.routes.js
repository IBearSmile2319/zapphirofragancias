const {Router} = require('express');
const { SendDataUser } = require('../controller/user.controller');
const validate = require('../middlewares/validate');
const valid = require('../utils/Validators');

const router = Router();

router.post('/preregister',valid.user.validatePreRegister,validate,SendDataUser);


module.exports = router;