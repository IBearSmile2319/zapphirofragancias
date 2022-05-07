const { Router } = require('express');
const valid = require('../utils/Validators');
const validate = require('../middlewares/validate');
const { upload } = require('../middlewares/upload');
const { uploadIcon } = require('../middlewares/uploadIcon');
// require validater-jwt
const router = Router();
const { validateAdminJWT, adminMiddleware } = require('../middlewares/validate-jwt');
// admin
const { adminRegister, adminLogin, adminRenewToken } = require('../controller/admin.controller');
router.post('/register', valid.admin.validateRegister, validate, adminRegister)
router.post('/login', valid.admin.validateLogin, validate, adminLogin)

// role
const { roleRegister, roleList, removeRole } = require('../controller/role.controller')
router.post('/role', validateAdminJWT, adminMiddleware, uploadIcon.single('icon'), roleRegister)
router.get('/role', validateAdminJWT, adminMiddleware, roleList)
router.delete('/role/:id', validateAdminJWT, adminMiddleware, removeRole)

// category
const { addCategory, getCategories, removeCategory, updateCategory } = require('../controller/category.controller');
router.post('/category', addCategory)
router.get('/category', getCategories)
router.delete('/category/:id', removeCategory)
router.put('/category/:id', updateCategory)

// product
const { addProduct, getProducts, removeProduct, updateProduct, getProduct } = require('../controller/product.controller');
router.post('/product', addProduct)
router.get('/product', getProducts)
router.get('/product/:slug', getProduct)
router.delete('/product/:id', removeProduct)
router.put('/product/:id', updateProduct)

// Image



// brand
const { addBrand, getBrands, removeBrand, updateBrand } = require('../controller/brand.controller');

router.post('/brand', addBrand)
router.get('/brands', getBrands)
router.delete('/brand/:id', removeBrand)
router.put('/brand/:id', updateBrand)

module.exports = router;
