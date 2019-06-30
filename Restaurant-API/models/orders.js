const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    customerName: String, 
    customerMobile: String,
    customerAddress: String,
    itemList: String,
    totalBill: Number,
    receiveTime: {
        type: Date,
        default: Date.now
    },
    activeStatus: {
        type: Boolean,
        default: true
    }
})

const Order = mongoose.model('Order', orderSchema);

let lastOrderID = "";
// ---------------------------------------------------------------
// =================== Basic CRUD Operations =====================
// ---------------------------------------------------------------

async function getAllOrders(){
    const orders = await Order.find();
    return orders;
}

async function getActiveOrders(){
    const orders = await Order.find({ activeStatus: true });
    return orders;
}

async function getOrderByID(id){
    const order = await Order.find({ _id: id });
    console.log(order);
    if(!order){
        console.log("Order Not Found!")
        return;
    }
    return order;
}

async function addOrder(customerName, customerMobile, customerAddress, itemList, totalBill){
    const order = new Order({
        customerName: customerName,
        customerMobile: customerMobile, 
        customerAddress: customerAddress,
        itemList: itemList,
        totalBill: totalBill
    });
    const result = await order.save();
    lastOrderID = result._id;
    console.log(lastOrderID);

    return result;
}

async function updateStatus(id, status){
    const order = await Order.findById(id);
    if(!order){
        console.log("Order Not Found!")
        return;
    }

    order.activeStatus = status;

    const result = await order.save();
    console.log(result);
    return result;
}

async function updateCustomerData(customerName, customerMobile, customerAddress){
    const order = await Order.findById(lastOrderID);
    if(!order){
        console.log("Order Not Found!")
        return;
    }

    order.customerName = customerName;
    order.customerMobile = customerMobile;
    order.customerAddress = customerAddress;

    const result = await order.save();
    console.log(result);
    return result;
}

async function deleteOrder(id){
    const order = Order.findById(id);
    if(!order){
        console.log("Order Not Found!")
        return;
    }
    const result = await order.remove();
    console.log(result);
    return result;
}

module.exports.getAllOrders = getAllOrders;
module.exports.getActiveOrders = getActiveOrders;
module.exports.getOrderByID = getOrderByID;
module.exports.addOrder = addOrder;
module.exports.updateStatus = updateStatus;
module.exports.deleteOrder = deleteOrder;
module.exports.updateCustomerData = updateCustomerData;
