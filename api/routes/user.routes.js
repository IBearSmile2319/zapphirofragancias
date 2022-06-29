const { Router } = require('express');
const { validateJWT } = require('../middlewares/validate-jwt');
const validate = require('../middlewares/validate');
const valid = require('../utils/Validators');
const multerUpload = require('../middlewares/multerUpload');

const router = Router();
// login
const { SendDataUser, userRenewToken, userSignIn, userUpdate } = require('../controller/user.controller');
router.post('/preregister', valid.user.validatePreRegister, validate, SendDataUser);
router.post('/sign-in', valid.user.validateLogin, validate, userSignIn);
router.get('/renewToken', validateJWT, userRenewToken);
router.put('/update', validateJWT, multerUpload.single("avatar"), userUpdate);

// product
const { getProduct, getProductsByCategory, getProducts } = require('../controller/product.controller');
router.get('/product/:slug', getProduct);
router.get('/products/:category', getProductsByCategory);
router.get('/products', getProducts);


// order
const { addOrder, getOrdersByUser, getOrdersForVerify, firstOrder } = require('../controller/order.controller');
router.post('/order', addOrder);
// router.get('/order', getCustomerOrders);
// router.post('/order/first', multerUpload.single("img"), firstOrder);
router.get('/orders',validateJWT, getOrdersByUser);
router.get('/orders/verify/:user', getOrdersForVerify);
// category
const { getCategories } = require('../controller/category.controller');



router.get('/category', getCategories);


module.exports = router;