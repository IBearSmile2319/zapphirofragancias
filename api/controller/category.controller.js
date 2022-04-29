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
            type: cate.type,
            children: ListCategories(categories, cate._id)
        })
    }
    return categoryList
}

exports.addCategory = async (req, res) => {
    // TODO: use slugify to create slug
    // TODO: file upload
    // TODO: if parentId is null then create new category
    // TODO: if parentId is not null then create new sub category
    // TODO: save category

}

exports.getCategories = async (req, res) => {
    // TODO: get all categories
    // TODO: get all sub categories(ListCategories)
}

exports.updateCategory = async (req, res) => {
    // TODO: find and update category
}

exports.deleteCategory = async (req, res) => {
    // TODO: find and delete category
}
