const { Router } = require('express');
const { adminRegister } = require('../controller/admin.controller');
const { roleRegister } = require('../controller/role.controller')
const valid = require('../utils/Validators');
const validate = require('../middlewares/validate');
// brand
const router = Router();

router.post('/register', valid.admin.validateRegister, validate, adminRegister)
router.post('/role', roleRegister)
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
