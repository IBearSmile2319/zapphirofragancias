const Product = require('../models/mongo/product/Product.model');
const Category = require('../models/mongo/product/Category.model');
const slugify = require('slugify');
const AzureUpload = require('../middlewares/AzureUpload');
const ImageModel = require('../models/mongo/product/Image.model');
const ProductModel = require('../models/mongo/product/Product.model');
exports.addAdminProduct = async (req, res) => {
    const product = new ProductModel({
        ...req.body,
        slug: slugify(req.body.name),
        createdBy: req.uid
    });
    if (req.body.dimension) {
        product.dimension = JSON.parse(req.body.dimension)
    }
    let productPicture = [];
    if (req.files) {
        productPicture = req.files.map(async file => {
            const img = await AzureUpload(file, "products")
            const image = new ImageModel({
                url: img.url,
            });
            const imageId = await image.save();
            return {
                imgId: imageId._id,
            }
        }
        )
        product.productPicture = await Promise.all(productPicture)
    }
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

exports.getAdminProducts = async (req, res) => {
    await Product.find({})
        .populate('category')
        .populate('brand')
        .populate('productPicture.imgId', "url")
        .populate('createdBy', "username")
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
                    data: products,
                })
            }
        }
        )
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

// ------------
// user
// ------------
exports.getProductsUser = async (req, res) => {
    await Product.find({ status: true })
        .populate('category')
        .populate('brand')
        .populate('productPicture.imgId', "url")
        .select('name slug description price category brand productPicture stock competed ofactoryFamily dimension')
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
                    data: products,
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
        .exec((err, product) => {
            if (err) {
                return res.status(500).json({
                    message: "Error al obtener producto",
                    error: err
                })
            }
            if (product) {
                ImageModel.populate(product, { path: 'images.img' }, (err, product) => {
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
                })
            }
        }
        )
}

// exports.updateProduct = async (req, res) => {
//     const { id } = req.params;
//     const {
//         name,
//         description,
//         price,
//         category,
//         brand,
//         stock,
//         competed,
//         ofactoryFamily,
//         dimension
//     } = req.body;
//     let images = [];
//     if (req.files.length > 0) {
//         images = req.files.map(async (file) => {
//             const image = new Image({
//                 url: `/public/${file.filename}`,
//                 name: file.filename,
//             });
//             await image.save((err, img) => {
//                 if (err) {
//                     return res.status(500).json({
//                         message: "Error al agregar imagen",
//                         error: err
//                     })
//                 }
//                 if (img) {
//                     return img._id
//                 }
//             });
//         });
//     }
//     const productObj = {
//         name,
//         slug: slugify(name),
//         description,
//         price,
//         category,
//         brand,
//         images,
//         stock,
//         competed,
//         ofactoryFamily,
//         dimension,
//     }
//     await Product.findByIdAndUpdate(id, productObj, (err, product) => {
//         if (err) {
//             return res.status(500).json({
//                 message: "Error al actualizar producto",
//                 error: err
//             })
//         }
//         if (product) {
//             return res.status(200).json({
//                 message: "Producto actualizado correctamente",
//                 product,
//             })
//         }
//     }
//     )
// }

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
