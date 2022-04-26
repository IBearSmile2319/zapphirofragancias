const { Router } = require('express');
const { adminRegister } = require('../controller/admin.controller');
const { roleRegister } = require('../controller/role.controller')

const router = Router();

router.post('/register', adminRegister)
router.post('/role', roleRegister)

module.exports = router;
