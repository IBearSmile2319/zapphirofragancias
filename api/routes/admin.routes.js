const { Router } = require('express');
const valid = require('../utils/Validators');
const validate = require('../middlewares/validate');
const multerUpload = require('../middlewares/multerUpload');
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
router.post('/role', validateAdminJWT, adminMiddleware, multerUpload.single('icon'), roleRegister)
router.get('/role', validateAdminJWT, adminMiddleware, roleList)
router.delete('/role/:id', validateAdminJWT, adminMiddleware, removeRole)

// Range 
const { addRange, listRange, removeRange, updateRange } = require('../controller/range.controller')
router.post('/range', validateAdminJWT, adminMiddleware, multerUpload.single('icon'), addRange)
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
const { addAdminProduct,getAdminProducts} = require('../controller/product.controller');
router.post('/product', validateAdminJWT, adminMiddleware, multerUpload.array("productPicture"), addAdminProduct)
router.get('/product', validateAdminJWT, adminMiddleware, getAdminProducts)
// router.get('/product/:slug', validateAdminJWT, adminMiddleware, getProduct)
// router.delete('/product/:id', validateAdminJWT, adminMiddleware, removeProduct)
// router.put('/product/:id', validateAdminJWT, adminMiddleware, updateProduct)

// Combo
const { addCombo, listCombo } = require('../controller/combo.controller');
router.post('/combo', validateAdminJWT, adminMiddleware, multerUpload.fields([
    { name: 'icon', maxCount: 1 },
    { name: 'imagen', maxCount: 1 }
]), addCombo)
router.get('/combo', validateAdminJWT, adminMiddleware, listCombo)


// order
const { adminGetCustomerOrders, adminGetOrderById, AdminAcceptOrder } = require('../controller/order.controller');
router.put('/order/accept', validateAdminJWT, adminMiddleware, AdminAcceptOrder)
router.get('/order/:valid', validateAdminJWT, adminMiddleware, adminGetCustomerOrders)
router.get('/order/view/:id', validateAdminJWT, adminMiddleware, adminGetOrderById)

// Image



// brand
const { addBrand, getBrands, removeBrand, updateBrand } = require('../controller/brand.controller');


router.post('/brand', validateAdminJWT, adminMiddleware, addBrand)
router.get('/brands', validateAdminJWT, adminMiddleware, getBrands)
router.delete('/brand/:id', validateAdminJWT, adminMiddleware, removeBrand)
router.put('/brand/:id', validateAdminJWT, adminMiddleware, updateBrand)

module.exports = router;
