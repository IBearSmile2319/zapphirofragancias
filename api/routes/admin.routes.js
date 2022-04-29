const { Router } = require('express');
const { adminRegister } = require('../controller/admin.controller');
const { roleRegister } = require('../controller/role.controller')
const valid = require('../utils/Validators');
const validate = require('../middlewares/validate');
const router = Router();

router.post('/register', valid.admin.validateRegister, validate, adminRegister)
router.post('/role', roleRegister)

module.exports = router;
