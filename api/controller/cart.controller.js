const CartModel = require('../models/mongo/cart/Cart.model');

// update cart items
const runUpdate = (condition, updateData) => {
    return new Promise((resolve, reject) => {
        // TODO: update cart item
        CartModel.findOneAndUpdate(condition, updateData, { upsert: true })
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
    CartModel.findOne({ user: req.uid })
        .exec((error, cart) => {
            if (error) {
                return res.status(500).json({
                    message: "Error al buscar el carrito",
                });
            }
            if (cart) {
                let promiseArray = []
                req.body.cartItems.forEach(cartItem => {
                    const product = cartItem.product;
                    // const quantity = cartItem.quantity;
                    const item = cart.cartItems.find(item => item.product === product);
                    let condition, update;
                    if (item) {
                        condition = { user: req.uid, "cartItems.product": product };
                        update = {
                            $set: {
                                "cartItems.$": cartItem,
                            }
                        }
                    } else {
                        condition = { user: req.uid };
                        update = {
                            $push: {
                                cartItems: cartItem,
                            }
                        }
                    }
                    promiseArray.push(runUpdate(condition, update));
                })
                Promise.all(promiseArray)
                    .then(response => {
                        res.status(202).json({
                            message: "Productos agregados al carrito",
                        });
                    })
                    .catch(err => {
                        res.status(500).json({
                            message: "Error al actualizar el carrito",
                        });
                    })
            } else {
                // si el carrio no existe ps lo crea
                const cart = new CartModel({
                    user: req.uid,
                    cartItems: req.body.cartItems
                });
                cart.save((err, cart) => {
                    if (err) return res.status(500).json({
                        message: "Error al crear el carrito",
                    });
                    res.status(200).json({
                        message: "Carrito creado",
                        cart
                    });
                })
            }
        })
}


// get cart items
exports.getCartItems = (req, res, next) => {
    // TODO: find cart by user id
    CartModel.findOne({ user: req.uid })
        .populate('cartItems.product')
        // .populate('cartItems.combo')
        .populate('user')
        .exec((error, cart) => {
            if (error) {
                return res.status(500).json({
                    message: "Error al buscar el carrito",
                });
            }
            if (cart) {
                let cartItems = {}
                cart.cartItems.forEach((item, index) => {
                    cartItems[item.product._id.toString()] = {
                        _id: item.product._id.toString(),
                        name: item.product.name,
                        price: item.product.price,
                        quantity: item.quantity,
                        // image: item.product.productPinctures[0].imgId.url,
                    }
                })
                res.status(200).json({
                    message: "Carrito encontrado",
                    cartItems,
                });
            }
        })

}

// new update remove cart items
exports.removeCartItems = (req, res, next) => {
    const { productId } = req.body.payload;
    if (productId) {
        CartModel.update(
            { user: req.uid },
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