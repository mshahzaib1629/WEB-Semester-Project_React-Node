const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost/restaurantDB')
//     .then(() => console.log('Connected to MongoDB Successfully!'))
//     .catch((err) => console.error('Could not connect to Mongodb', err));

const itemSchema = mongoose.Schema({
    // item_Id: String,    //PK
    name: String,
    price: Number,
    availability: {
        type: Boolean,
        default: true
    },
    category: String,   //FK
})

const Item = mongoose.model('Item', itemSchema);

// ---------------------------------------------------------------
// =================== Basic CRUD Operations =====================
// ---------------------------------------------------------------

async function getItems(){
    const items = await Item.find();
    return items;
}

async function getAvailableItems(){
    const items = await Item.find({ availability: true });
    return items;
}

async function getItemByID(id){
    const item = await Item.find({ _id: id});
    // console.log(item);
    if(!item){
        console.log("Item Not Found!")
        return;
    }
    return item;
}

async function addItem(name, price, category){
    const item = new Item({
        name: name,
        price: price,
        category: category
    });
    const result = await item.save();
    console.log(result);
}

async function updateItem(id, name, price, availability, category){
    const item = await Item.findById(id);
    if(!item){
        console.log("Item Not Found!")
        return;
    }

    item.name = name;
    item.price = price;
    item.category = category;
    item.availability = availability;

    const result = await item.save();
    console.log(result);
}

async function deleteItem(id){
    const item = Item.findById(id);
    if(!item){
        console.log("Item Not Found!")
        return;
    }
    const result = await item.remove();
    // const result = await Item.findByIdAndRemove(id);
    console.log(result);
}

// addItem("shami Burger", 250, "5cfc869ce7cff50204aa4808");
// updateItem("5cfc97b53d2b162848fa9941", "Zinger Burger", 300, false, "5cfc869ce7cff50204aa4808");
// deleteItem("5cfc9cc383f1fb3448a24269");
// getAvailableItems();
// getItemByID("5cfc97b53d2b162848fa9941");



