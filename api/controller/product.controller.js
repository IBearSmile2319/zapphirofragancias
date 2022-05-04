const Product = require('../models/mongo/product/Product.model');
const Image = require('../models/mongo/product/Image.model');
const Category = require('../models/mongo/product/Category.model');
const slugify = require('slugify')
exports.addProduct = async (req, res) => {
    const {
        name,
        description,
        price,
        category,
        brand,
        stock,
        competed,
        ofactoryFamily,
        dimension
    } = req.body;
    let images = [];
    if (req.files.length > 0) {
        images = req.files.map(async (file) => {
            const image = new Image({
                url: `/public/${file.filename}`,
                name: file.filename,
            });
            await image.save((err, img) => {
                if (err) {
                    return res.status(500).json({
                        message: "Error al agregar imagen",
                        error: err
                    })
                }
                if (img) {
                    return img._id
                }
            });
        });
    }
    const product = new Product({
        name,
        slug: slugify(name),
        description,
        price,
        category,
        brand,
        images,
        stock,
        competed,
        ofactoryFamily,
        dimension,
    });
    await product.save((err, product) => {
        if (err) {
            return res.status(500).json({
                message: "Error al agregar producto",
                error: err
            })
        }
        if (product) {
            return res.status(201).json({
                message: "Producto agregado correctamente",
                product,
            })
        }
    });
}

exports.getProductsByCategory = async (req, res) => {
    const { category } = req.params;
    await Category.findOne({ slug: category })
    .select('_id')
    .exec((err, category) => {
        if (err) {
            return res.status(500).json({
                message: "Error al obtener categoría",
                error: err
            })
        }
        if (category) {
            Product.find({ category: category._id })
            .exec((err, products) => {
                if (err) {
                    return res.status(500).json({
                        message: "Error al obtener productos",
                        error: err
                    })
                }
                if (products) {
                    return res.status(200).json({
                        message: "Productos obtenidos correctamente",
                        products,
                    })
                }
            })
        }
    })
}


exports.getProducts = async (req, res) => {
    await Product.find({})
        .populate('category')
        .populate('brand')
        .populate('images')
        .exec((err, products) => {
            if (err) {
                return res.status(500).json({
                    message: "Error al obtener productos",
                    error: err
                })
            }
            if (products) {
                return res.status(200).json({
                    message: "Productos obtenidos correctamente",
                    products,
                })
            }
        }
    )
}

exports.getProduct = async (req, res) => {
    const { slug } = req.params;
    await Product.findById(slug)
        .populate('category')
        .populate('brand')
        .populate('images')
        .exec((err, product) => {
            if (err) {
                return res.status(500).json({
                    message: "Error al obtener producto",
                    error: err
                })
            }
            if (product) {
                return res.status(200).json({
                    message: "Producto obtenido correctamente",
                    product,
                })
            }
        }
    )
}

exports.updateProduct = async (req, res) => {
    const { id } = req.params;
    const {
        name,
        description,
        price,
        category,
        brand,
        stock,
        competed,
        ofactoryFamily,
        dimension
    } = req.body;
    let images = [];
    if (req.files.length > 0) {
        images = req.files.map(async (file) => {
            const image = new Image({
                url: `/public/${file.filename}`,
                name: file.filename,
            });
            await image.save((err, img) => {
                if (err) {
                    return res.status(500).json({
                        message: "Error al agregar imagen",
                        error: err
                    })
                }
                if (img) {
                    return img._id
                }
            });
        });
    }
    const productObj = {
        name,
        slug: slugify(name),
        description,
        price,
        category,
        brand,
        images,
        stock,
        competed,
        ofactoryFamily,
        dimension,
    }
    await Product.findByIdAndUpdate(id, productObj, (err, product) => {
        if (err) {
            return res.status(500).json({
                message: "Error al actualizar producto",
                error: err
            })
        }
        if (product) {
            return res.status(200).json({
                message: "Producto actualizado correctamente",
                product,
            })
        }
    }
    )
}

exports.removeProduct = async (req, res) => {
    // TODO: find product and update status to false
    const { id } = req.params;
    await Product.findByIdAndUpdate(id, { status: false }, (err, product) => {
        if (err) {
            return res.status(500).json({
                message: "Error al eliminar producto",
                error: err
            })
        }
        if (product) {
            return res.status(200).json({
                message: "Producto eliminado correctamente",
                product,
            })
        }
    }
    )
}
