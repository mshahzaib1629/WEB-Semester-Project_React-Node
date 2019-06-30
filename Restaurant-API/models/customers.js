const mongoose = require('mongoose');

const customerSchema = mongoose.Schema({
    customerMobile: String,    //PK
    name: String,
    address: String //optional
})

const Customer = mongoose.model('Customer', customerSchema);
