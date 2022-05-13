const { Router } = require('express');
const { validateJWT } = require('../middlewares/validate-jwt');
const validate = require('../middlewares/validate');
const valid = require('../utils/Validators');
const { uploadPayment } = require('../middlewares/uploadPayment');
const router = Router();
// login
const { SendDataUser, userRenewToken, userSignIn } = require('../controller/user.controller');
router.post('/preregister', valid.user.validatePreRegister, validate, SendDataUser);
router.post('/sign-in', valid.user.validateLogin, validate, userSignIn);
router.get('/renewToken', validateJWT, userRenewToken);

// product
const { getProduct, getProductsByCategory, getProducts } = require('../controller/product.controller');
router.get('/product/:slug', getProduct);
router.get('/products/:category', getProductsByCategory);
router.get('/products', getProducts);
// order
const { addOrder, getOrdersByUser, getOrdersForVerify, firstOrder, getCustomerOrders } = require('../controller/order.controller');
router.post('/order', addOrder);
router.get('/order', getCustomerOrders);
router.post('/order/first', uploadPayment.single("img"), firstOrder);
router.get('/orders/:user', getOrdersByUser);
router.get('/orders/verify/:user', getOrdersForVerify);
// category
const { getCategories } = require('../controller/category.controller');

router.get('/category', getCategories);


module.exports = router;