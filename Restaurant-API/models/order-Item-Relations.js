const mongoose = require('mongoose');

const relationSchema = mongoose.Schema({
    order_id: String,    //FK
    item_id: String,     //FK
    item_price: Number
})

const Order = mongoose.model('Order_Item_Relation', relationSchema);
