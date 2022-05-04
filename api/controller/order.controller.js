// user model
const User = require("../models/mongo/user/User.model");
// order model
const Order = require("../models/mongo/cart/Order.model");
// product model
const Product = require("../models/mongo/product/Product.model");

const { generateJWT } = require("../helper/jwt");
const { SendMail } = require("../helper/sendMailerHelper");

exports.firstOrder = async (req, res) => {
    // TODO: save user and get id
    // TODO: save address and get id
    // TODO: save payment and get id
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
}

exports.updateOrder = async (req, res) => {
    // TODO: update order customer
}
