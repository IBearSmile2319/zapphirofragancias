const {Router} = require('express');
const { SendDataUser } = require('../controller/user.controller');
const validate = require('../middlewares/validate');
const valid = require('../utils/Validators');

const router = Router();

router.post('/preregister',valid.user.validatePreRegister,validate,SendDataUser);
// product
const { getProduct, getProductsByCategory, getProducts } = require('../controller/product.controller');
router.get('/product/:slug', getProduct);
router.get('/products/:category', getProductsByCategory);
router.get('/products', getProducts);
// category
const {getCategories} = require('../controller/category.controller');
router.get('/category',getCategories);


module.exports = router;