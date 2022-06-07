// user model
const User = require("../models/mongo/user/User.model");
// order model
const Order = require("../models/mongo/cart/Order.model");
// product model
const Product = require("../models/mongo/product/Product.model");
// bcrypt
const bcrypt = require("bcryptjs");
const SendMail = require("../helper/sendMailerHelper");
const Address = require("../models/mongo/user/Address.model");

const PaymentModel = require("../models/mongo/cart/Payment.model");
const RangeModel = require("../models/mongo/user/Range.model");

exports.firstOrder = async (req, res) => {
    const {
        firstName,
        lastName,
        email,
        nDocument,
        phone,
        promotion,
        // address,
        fullName,
        phoneNumber,
        alternativePhoneNumber,
        zipCode,
        street,
        number,
        neighborhood,
        city,
        state,
        country,
        reference,
        // payment
        paymentMethod,
        paymentComission,
        operationNumber,
        paymentNote,
        paymentMount,
        // order
        combo,
    } = req.body;

    // TODO: check if user exists

    //TODO: generate password
    const password = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    //TODO: generate username
    const username = `${firstName.split("")[0]}${lastName.split("")[0]}${nDocument}`
    // TODO: verify if user exist email or username or ndocument
    const user = await User.findOne({
        $or: [{ email }, { username }, { nDocument }]
    }).exec();
    if (user) {
        return res.status(200).json({
            success: false,
            message: "El usuario ya esta en proceso de validación",
        });
    }
    // TODO: save user and get id
    const newUser = new User({
        username,
        firstName,
        lastName,
        email,
        password,
        nDocument,
        phone,
        promotion,
        status: false,
        active: false,
        online: false,
    })
    // TODO: encrypt password
    const salt = await bcrypt.genSaltSync()
    newUser.password = await bcrypt.hash(password, salt);
    // TODO: save user
    newUser.save(async (err, user) => {
        if (err) {
            return res.status(400).json({
                success: false,
                error: err
            })
        }
        if (user) {
            // TODO: save address and get id
            const address = {
                user: user._id,
                fullName: fullName ? fullName : `${user.firstName} ${user.lastName}`,
                phoneNumber: phoneNumber ? phoneNumber : user.phone,
                alternativePhoneNumber,
                zipCode,
                street,
                number,
                neighborhood,
                city,
                state,
                country,
                reference,
            }
            const newAddress = new Address(address);
            const newSaveAddress = await newAddress.save();
            // error save address
            if (!newSaveAddress) {
                // TODO: delete user
                await User.deleteOne({ _id: user._id });
                return res.status(400).json({
                    success: false,
                    message: "Error al guardar la dirección",
                });
            }

            console.log(newSaveAddress);
            // TODO: save payment and get id
            const newPayment = new PaymentModel({
                user: user._id,
                paymentMethod,
                paymentComission,
                operationNumber,
                paymentNote,
                paymentMount,
            })
            // img
            if (req.file) {
                newPayment.img = `/public/payment/${req.file.filename}`
            }
            await newPayment.save(async (err, payment) => {
                if (err) {
                    // TODO: delete user
                    await User.deleteOne({ _id: user._id });
                    // TODO: delete address
                    await Address.deleteOne({ _id: newSaveAddress._id });
                    return res.status(400).json({
                        success: false,
                        message: "Error al guardar el pago",
                        error: err
                    })
                }
                if (payment) {
                    // get range id
                    const rank = await RangeModel.findOne({ _id: range });
                    const newOrder = new Order({
                        user: user._id,
                        address: newSaveAddress._id,
                        items: [
                            {
                                range: rank._id,
                                quantity: 1,
                                price: rank.price,
                            }
                        ],
                        total: rank.price,
                        payment: payment._id,
                        orderStatus: [
                            {
                                type: "ordenado",
                                date: new Date(),
                                Completed: true,
                            },
                            {
                                type: "confirmado",
                                Completed: false,
                            },
                            {
                                type: "enviado",
                                Completed: false,
                            },
                            {
                                type: "entregado",
                                Completed: false,
                            },
                        ],
                        status: false,
                        approved: false,
                    })
                    await newOrder.save(async (err, order) => {
                        if (err) {
                            // TODO: delete user
                            await User.deleteOne({ _id: user._id });
                            // TODO: delete address
                            await Address.deleteOne({ _id: newSaveAddress._id });
                            // TODO: delete payment
                            await PaymentModel.deleteOne({ _id: payment._id });
                            // TODO: delete order
                            return res.status(400).json({
                                success: false,
                                message: "Error al guardar el pedido",
                                error: err
                            })
                        }
                        if (order) {
                            console.log(password, user.username);
                            const info = await SendMail(
                                `
                                <h1>Bienvenido a la plataforma de pedidos de la marca ZF Socios</h1>
                                <p>
                                    Su usuario es: ${user.username}
                                </p>
                                <p>
                                    Su contraseña es: ${password}
                                </p>
                                <p>
                                    Para ingresar a la plataforma de pedidos de la marca ZF Socios
                                    ingrese a la siguiente dirección:
                                </p>
                                <p>
                                    <a href="http://localhost:3000/sign-in">http://localhost:3000/sign-in</a>
                                </p>

                                `, 
                                "Activar cuenta",
                                email
                            );
                            if (!info) {
                                return res.status(400).json({
                                    success: false,
                                    message: "Error al enviar el correo",
                                });
                            }
                            return res.status(200).json({
                                success: true,
                                message: "Pedido guardado",
                                order
                            })
                        }
                    })

                }
            })
        }
    })
    // TODO: save order
}

exports.addOrder = async (req, res) => {
    // TODO: delete cart
    // TODO: cart -> save order
}


exports.getOrder = async (req, res) => {
    // TODO: get order findOne

}

exports.getOrdersByUser = async (req, res) => {
    // TODO: get orders find by user
}

exports.getOrdersForVerify = async (req, res) => {
    // TODO: get orders find for validate
}
exports.getCustomerOrders = async (req, res) => {
    // TODO: get orders find all
    await Order.find({})
        .populate("user")
        .populate("payment")
        .populate("items.range")
        .populate("items.product")
        .populate("address")
        .exec((err, orders) => {
            if (err) {
                return res.status(400).json({
                    success: false,
                    message: "Error al obtener los pedidos",
                    error: err
                })
            }
            if (orders) {
                return res.status(200).json({
                    success: true,
                    orders
                })
            }
        })

}

exports.updateOrder = async (req, res) => {
    // TODO: update order customer
}
