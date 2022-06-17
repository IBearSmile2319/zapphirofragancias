const fs = require("fs");
const path = require("path");

// bcrypt
const bcrypt = require("bcryptjs");
const SendMail = require("../helper/sendMailerHelper");

const { saveAddressService } = require("../service/address.service");
const { saveUserService } = require("../service/user.service");
const { savePaymentService } = require("../service/payment.service");
const { saveOrderService } = require("../service/order.service");
// models
const PaymentModel = require("../models/mongo/cart/Payment.model");
const ComboModel = require("../models/mongo/product/Combo.model");
const AddressModel = require("../models/mongo/user/Address.model");
const UserModel = require("../models/mongo/user/User.model");
const OrderModel = require("../models/mongo/cart/Order.model");

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
    try {
        const findCombo = await ComboModel.findOne({ _id: combo }).exec();
        if (!findCombo) {
            // TODO: delete image in public folder
            if (req.file) {
                fs.unlinkSync(path.resolve(__dirname, "../public/uploads/payment", req.file.filename));
            }
            return res.status(400).json({
                success: false,
                message: "No existe el combo selecionado",
                error: findCombo
            })
        }
        // verify price and combo price
        if (findCombo.price == paymentMount) {
            console.log("correcto")
        } else {
            if (req.file) {
                fs.unlinkSync(path.resolve(__dirname, "../public/uploads/payment", req.file.filename));
            }
            return res.status(400).json({
                success: false,
                message: "El monto del pago no coincide con el precio del combo",
                error: findCombo
            })
        }
        //TODO: generate password
        const password = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

        //TODO: generate username
        const username = `${firstName.split("")[0]}${lastName.split("")[0]}${nDocument}`

        // TODO: verify if user exist email or username or ndocument

        const isExistUser = await UserModel.findOne({
            $or: [
                { email },
                { username },
                { nDocument }
            ]
        }).exec();
        if (isExistUser) {
            if (req.file) {
                fs.unlinkSync(path.resolve(__dirname, "../public/uploads/payment", req.file.filename));
            }
            return res.status(400).json({
                success: false,
                message: "El usuario ya esta en proceso de validación",
            });
        }
        // generate code invite and if exist code in UserModel for repeat process use firstName and lastName two letter
        const codeInvite = `${firstName.substring(0, 3)}${lastName.substring(0, 2)}${nDocument.substring(0, 2)}${nDocument.substring(nDocument.length - 2)}`;
        // const code = ;
        const isExistCode = await UserModel.findOne({ code_invite: codeInvite }).exec();
        if (isExistCode) {
            if (req.file) {
                fs.unlinkSync(path.resolve(__dirname, "../public/uploads/payment", req.file.filename));
            }
            return res.status(400).json({
                success: false,
                message: "El código ya existe",
            });
        }

        // TODO: save user and get id
        const newUser = new UserModel({
            username,
            firstName,
            lastName,
            email,
            password,
            nDocument,
            phone,
            status: true,
            active: false,
            online: false,
        })
        newUser.code_invite = codeInvite;
        if (promotion && promotion !== "" && promotion !== "null" && promotion !== "undefined") {
            newUser.promotion = promotion;
        }

        // TODO: encrypt password
        const salt = await bcrypt.genSaltSync()
        newUser.password = await bcrypt.hash(password, salt);

        // TODO: save user
        const userSaved = await saveUserService(newUser);
        if (!userSaved) {
            if (req.file) {
                fs.unlinkSync(path.resolve(__dirname, "../public/uploads/payment", req.file.filename));
            }
            return res.status(400).json({
                success: false,
                message: "Error al guardar el usuario",
            });
        }

        // TODO: save address and get id
        // const address = {
        //     user: user._id,
        //     fullName: fullName ? fullName : `${user.firstName} ${user.lastName}`,
        //     phoneNumber: phoneNumber ? phoneNumber : user.phone,
        //     alternativePhoneNumber,
        //     zipCode,
        //     street,
        //     number,
        //     neighborhood,
        //     city,
        //     state,
        //     country,
        //     reference,
        // }
        // const newAddress = new AddressModel(address);
        // const saveAddress = await saveAddressService(newAddress)
        // error save address
        // if (!saveAddress) {
        //     // TODO: delete user
        //     await User.deleteOne({ _id: user._id });
        //     return res.status(400).json({
        //         success: false,
        //         message: "Error al guardar la dirección",
        //     });
        // }
        // TODO: save payment and get id
        const newPayment = new PaymentModel({
            user: userSaved._id,
            paymentMethod,
            operationNumber,
            paymentNote,
            paymentMount,
        })
        // paymentComission,
        if (paymentComission && paymentComission !== "" && paymentComission !== "null" && paymentComission !== "undefined") {
            newPayment.paymentComission = paymentComission;
        }
        // img
        if (req.file) {
            newPayment.img = `/public/payment/${req.file.filename}`
        }
        const savePayment = await savePaymentService(newPayment);
        if (!savePayment) {
            // TODO: delete user
            await UserModel.deleteOne({ _id: userSaved._id });
            // TODO: delete address
            // await Address.deleteOne({ _id: newSaveAddress._id });
            // TODO: delete image in public folder
            if (req.file) {
                fs.unlinkSync(path.resolve(__dirname, "../public/uploads/payment", req.file.filename));
            }
            return res.status(400).json({
                success: false,
                message: "Error al guardar el pago",
                error: savePayment
            })
        }

        // TODO: save order and get id 

        const newOrder = new OrderModel({
            user: userSaved._id,
            // address: newSaveAddress._id,
            items: [
                {
                    combo: findCombo._id,
                    quantity: 1,
                    price: findCombo.price,
                }
            ],
            total: findCombo.price,
            payment: savePayment._id,
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
        const saveOrder = await saveOrderService(newOrder);
        if (!saveOrder) {
            // TODO: delete user
            await UserModel.deleteOne({ _id: userSaved._id });
            // TODO: delete address
            // await Address.deleteOne({ _id: newSaveAddress._id });
            // TODO: delete payment
            await PaymentModel.deleteOne({ _id: savePayment._id });
            // TODO: delete image in public folder
            if (req.file) {
                fs.unlinkSync(path.resolve(__dirname, "../public/uploads/payment", req.file.filename));
            }
            return res.status(400).json({
                success: false,
                message: "Error al guardar el pedido",
                error: err
            })
        }
        const info = await SendMail(
            `
                                <h1>Bienvenido a la plataforma de pedidos de la marca ZF Socios</h1>
                                <p>
                                    Su usuario es: ${userSaved.username}
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
            // TODO: delete user
            await UserModel.deleteOne({ _id: saveUser._id });
            // TODO: delete address
            // await Address.deleteOne({ _id: newSaveAddress._id });
            // TODO: delete payment
            await PaymentModel.deleteOne({ _id: savePayment._id });
            // TODO: delete order
            await OrderModel.deleteOne({ _id: saveOrder._id });
            // TODO: delete image in public folder
            if (req.file) {
                fs.unlinkSync(path.resolve(__dirname, "../public/uploads/payment", req.file.filename));
            }
            return res.status(400).json({
                success: false,
                message: "Error al enviar el correo",
            });
        }
        return res.status(200).json({
            success: true,
            message: "Pedido guardado y correo enviado",
            saveOrder
        });
    } catch (err) {
        if (req.file) {
            fs.unlinkSync(path.resolve(__dirname, "../public/uploads/payment", req.file.filename));
        }
        return res.status(400).json({
            success: false,
            message: "Error al guardar el pedido",
            error: err
        })
    }

}
// admin
exports.adminGetCustomerOrders = async (req, res) => {
    // TODO: get orders find all
    await OrderModel.find({})
        .populate("user")
        .populate("payment")
        .populate("items.combo")
        .populate("items.product")
        .populate("address")
        .sort({ createdAt: -1 })
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


exports.updateOrder = async (req, res) => {
    // TODO: update order customer
}
