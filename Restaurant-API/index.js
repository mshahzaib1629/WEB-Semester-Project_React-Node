const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");
const item_Category_Model = require("./models/items-Categories");
const item_Model = require("./models/items");
const order_Model = require("./models/orders");

mongoose.connect('mongodb://localhost/restaurantDB')
    .then(() => console.log('Connected to MongoDB Successfully!'))
    .catch((err) => console.error('Could not connect to Mongodb', err));

const app = express();
app.use(express.json());
app.use(cors());

const port = 5000;
app.listen(port, function () {
    console.log(`Listening on Port 5000....`);
})

app.get('/', function (req, res) {
    res.send("Restaurant Server Started");
});

// ------------------------------------------------------------------------
// =================== Item-Categories API Operations =====================
// ------------------------------------------------------------------------

app.get('/api/item-categories', async function (req, res) {
    const categories = await item_Category_Model.getCategories();
    // console.log(categories);
    res.send(categories);
})

app.get('/api/item-categories/:id', async function (req, res) {
    const category = await item_Category_Model.getCategoryByID(req.params.id);
    console.log(category);
    res.send(category);
})

app.post('/api/item-categories', async function (req, res) {
    const category = await item_Category_Model.addCategory(req.body.name);
    res.send(category);
})

app.put('/api/item-categories/:id', async function (req, res) {
    const category = await item_Category_Model.updateCategory(req.params.id, req.body.name);
    res.send(category);
})

app.delete('/api/item-categories/:id', async function (req, res) {
    const category = await item_Category_Model.deleteCategory(req.params.id);
    res.send(category);
})
// --------------------------------------------------------------
// =================== Orders API Operations ====================
// --------------------------------------------------------------

app.get('/api/all-orders', async function (req, res) {
    const orders = await order_Model.getAllOrders();
    res.send(orders);
})
app.get('/api/orders', async function (req, res) {
    const orders = await order_Model.getActiveOrders();
    res.send(orders);
})
app.get('/api/orders/:id', async function (req, res) {
    const order = await order_Model.getOrderByID(req.params.id);
    res.send(order);
})
app.post('/api/orders', async function (req, res) {
    const order = await order_Model.addOrder(
        req.body.customerName,
        req.body.customerMobile,
        req.body.customerAddress,
        req.body.itemList,
        req.body.totalBill);
    res.send(order);
})

app.put('/api/orders/:id', async function (req, res) {
    const order = await order_Model.updateStatus(req.params.id, req.body.activeStatus);
    res.send(order);
})

app.put('/api/orders', async function (req, res) {
    const customerData = await order_Model.updateCustomerData(req.body.customerName, req.body.customerMobile, req.body.customerAddress);
    res.send(customerData);
})

app.delete('/api/orders/:id', async function (req, res) {
    const order = await order_Model.deleteOrder(req.params.id);
    res.send(order);
})