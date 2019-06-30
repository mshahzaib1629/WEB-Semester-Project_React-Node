const mongoose = require('mongoose');
const Joi = require('@hapi/joi');

// mongoose.connect('mongodb://localhost/restaurantDB')
//     .then(() => console.log('Connected to MongoDB Successfully!'))
//     .catch((err) => console.error('Could not connect to Mongodb', err));

const categorySchema = mongoose.Schema({
    // category_Id: String,    //PK
    name: String,
    introducing_Date: {
        type: Date,
        default: Date.now
    }
})

const Category = mongoose.model('item-Category', categorySchema);

// ---------------------------------------------------------------
// =================== Basic CRUD Operations =====================
// ---------------------------------------------------------------

async function getCategories(){
    const categories = await Category.find();
    return categories;
}

async function getCategoryByID(id){
    const category = await Category.find({ _id: id });
    console.log(category);
    if(!category){
        console.log("Category Not Found!")
        return;
    }
    return category;
}

async function addCategory(name){
    const category = new Category({
        name: name
    });
    const result = await category.save();
    console.log(result);
    return result;
}

async function updateCategory(id, name){
    const category = await Category.findById(id);
    if(!category){
        console.log("Category Not Found!")
        return;
    }

    category.name = name;

    const result = await category.save();
    console.log(result);
    return result;
}

async function deleteCategory(id){
    const category = Category.findById(id);
    if(!category){
        console.log("Category Not Found!")
        return;
    }
    const result = await category.remove();
    // const result = await Category.findByIdAndRemove(id);
    console.log(result);
    return result;
}

function validateCategory(category){
    const schema = {                    
        name: Joi.string().min(3).required()
    }
    return Joi.validate(category, schema)
}

module.exports.getCategories = getCategories;
module.exports.getCategoryByID = getCategoryByID;
module.exports.addCategory = addCategory;
module.exports.updateCategory = updateCategory;
module.exports.deleteCategory = deleteCategory;