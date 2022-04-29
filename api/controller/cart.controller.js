const Cart = require('../models/mongo/cart/Cart.model');

// update cart items
const runUpdate = (condition, updateData) => {
    return new promise((resolve, reject) => {
        // TODO: update cart item
        Cart.findOneAndUpdate(condition, updateData, { upsert: true })
            .then(result => {
                resolve(result);
            })
            .catch(err => {
                reject(err);
            })
    })
}

// add item to cart and update cart
exports.addItemToCart = (req, res, next) => {
    // TODO: find cart by user id
    // TODO: card -> If cart already exists then update cart by quantity
    // TODO: card -> If cart does not exist then create new cart
}

// get cart items
exports.getCartItems = (req, res, next) => {
    // TODO: find cart by user id
}

// new update remove cart items
exports.removeCartItems = (req, res, next) => {
    const { productId } = req.body.payload;
    if (productId) {
        Cart.update(
            { user: req.user._id },
            {
                $pull: {
                    cartItems: {
                        product: productId,
                    },
                },
            }
        ).exec((error, result) => {
            if (error) return res.status(400).json({ error });
            if (result) {
                res.status(202).json({ result });
            }
        });
    }
}