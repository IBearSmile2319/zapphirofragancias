const Brand = require("../models/mongo/product/Brand.model");
const slugify = require("slugify");
exports.addBrand = async (req, res) => {
    const { name, description } = req.body;
    const slug = slugify(name)
    const brand = new Brand({
        name,
        slug,
        description,
        createdBy: req.uid,
        status: true,
    });
    await brand.save();
    return res.status(201).json({
        message: "Brand added successfully",
        brand,
    });
}

exports.getBrands = async (req, res) => {
    const brands = await Brand.find({ status: true });
    return res.status(200).json({
        message: "Brands fetched successfully",
        brands,
    });
}

exports.removeBrand = async (req, res) => {
    const { id } = req.params;
    const brand = await Brand.findByIdAndUpdate(id, { status: false });
    return res.status(200).json({
        message: "Brand removed successfully",
        brand,
    });
}

exports.updateBrand = async (req, res) => {
    const { id } = req.params;
    const { name, description } = req.body;
    const slug = slugify(name)
    const brand = await Brand.findByIdAndUpdate(id, {
        name,
        slug,
        description,
    });
    return res.status(200).json({
        message: "Brand updated successfully",
        brand,
    });
}
