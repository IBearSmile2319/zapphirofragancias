const Category = require('../models/mongo/product/Category.model');
const slugify = require('slugify');

// 
const ListCategories = (categories, parentId = null) => {

    const categoryList = []
    let category;
    if (parentId == null) {
        category = categories.filter(cat => cat.parentId == undefined)
    } else {
        category = categories.filter(cat => cat.parentId == parentId)
    }
    for (let cate of category) {
        categoryList.push({
            _id: cate._id,
            name: cate.name,
            slug: cate.slug,
            parentId: cate.parentId,
            children: ListCategories(categories, cate._id)
        })
        // type: cate.type,
    }
    return categoryList
}

exports.addCategory = async (req, res) => {
    // TODO: use slugify to create slug
    // TODO: file upload
    // TODO: if parentId is null then create new category
    // TODO: if parentId is not null then create new sub category
    // TODO: save category
    const { name, parentId } = req.body;
    try {
        const categoryObj = {
            name,
            slug: slugify(name),
            createdBy: req.user._id,
        }
        if (req.file) {
            categoryObj.icon = `/public/icon/${req.file.filename}`
        }
        if (parentId) {
            categoryObj.parentId = parentId
        }
        const cat = new Category(categoryObj);
        await cat.save((err, category) => {
            if (err) {
                return res.status(500).json({
                    message: "Error al agregar categoría",
                    error: err
                })
            }
            if (category) {
                return res.status(201).json({
                    message: "Categoría agregada correctamente",
                    category,
                })
            }
        })
    } catch (err) {
        return res.status(500).json({
            message: "Algo salió mal añadir nueva categoria",
            error: err,
        });
    }
}

exports.getCategories = async (req, res) => {
    // TODO: get all categories
    // TODO: get all sub categories(ListCategories)
    Category.find({}).exec((err, categories) => {
        if (err) {
            return res.status(500).json({
                message: "Algo salió mal obtener las categorias",
                error: err,
            });
        }
        if (categories) {
            return res.status(200).json({
                message: "Categorias obtenidas correctamente",
                categories: ListCategories(categories),
            });
        }
    })
}

exports.updateCategory = async (req, res) => {
    // TODO: find and update category
    const { id } = req.params;
    const { name, parentId } = req.body;
    try {
        const category = {
            name,
            slug: slugify(name),
        }
        if (parentId) {
            category.parentId = parentId
        }
        await Category.findByIdAndUpdate(id, category).exec((err, category) => {
            if (err) {
                return res.status(500).json({
                    message: "Algo salió mal actualizar la categoria",
                    error: err,
                });
            }
            if (category) {
                return res.status(200).json({
                    message: "Categoría actualizada correctamente",
                    category,
                });
            }

        })
    } catch (err) {
        return res.status(500).json({
            message: "Algo salió mal actualizar la categoria",
            error: err,
        });

    }
}

exports.removeCategory = async (req, res) => {
    // TODO: find and update status category
    const { id } = req.params;
    try {
        await Category.findByIdAndUpdate(id, { status: false }).exec((err, category) => {
            if (err) {
                return res.status(500).json({
                    message: "Algo salió mal eliminar la categoria",
                    error: err,
                });
            }
            if (category) {
                return res.status(200).json({
                    message: "Categoría eliminada correctamente",
                    category,
                });
            }

        })
    } catch (err) {
        return res.status(500).json({
            message: "Algo salió mal eliminar la categoria",
            error: err,
        });

    }

}
