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
router.get('/renewToken', validateAdminJWT, adminRenewToken)

// role
const { roleRegister, roleList, removeRole } = require('../controller/role.controller')
router.post('/role', validateAdminJWT, adminMiddleware, uploadIcon.single('icon'), roleRegister)
router.get('/role', validateAdminJWT, adminMiddleware, roleList)
router.delete('/role/:id', validateAdminJWT, adminMiddleware, removeRole)

// Range 
const { addRange, listRange, removeRange, updateRange } = require('../controller/range.controller')
router.post('/range', validateAdminJWT, adminMiddleware, uploadIcon.single('icon'), addRange)
router.get('/range', validateAdminJWT, adminMiddleware, listRange)
router.put('/range/:id', validateAdminJWT, adminMiddleware, updateRange)
router.delete('/range/:id', validateAdminJWT, adminMiddleware, removeRange)

// category
const { addCategory, getCategories, removeCategory, updateCategory } = require('../controller/category.controller');
router.post('/category', validateAdminJWT, adminMiddleware, addCategory)
router.get('/category', validateAdminJWT, adminMiddleware, getCategories)
router.delete('/category/:id', validateAdminJWT, adminMiddleware, removeCategory)
router.put('/category/:id', validateAdminJWT, adminMiddleware, updateCategory)

// product
const { addProduct, getProducts, removeProduct, updateProduct, getProduct } = require('../controller/product.controller');
router.post('/product', validateAdminJWT, adminMiddleware, addProduct)
router.get('/product', validateAdminJWT, adminMiddleware, getProducts)
router.get('/product/:slug', validateAdminJWT, adminMiddleware, getProduct)
router.delete('/product/:id', validateAdminJWT, adminMiddleware, removeProduct)
router.put('/product/:id', validateAdminJWT, adminMiddleware, updateProduct)

// Image



// brand
const { addBrand, getBrands, removeBrand, updateBrand } = require('../controller/brand.controller');

router.post('/brand', validateAdminJWT, adminMiddleware, addBrand)
router.get('/brands', validateAdminJWT, adminMiddleware, getBrands)
router.delete('/brand/:id', validateAdminJWT, adminMiddleware, removeBrand)
router.put('/brand/:id', validateAdminJWT, adminMiddleware, updateBrand)

module.exports = router;
