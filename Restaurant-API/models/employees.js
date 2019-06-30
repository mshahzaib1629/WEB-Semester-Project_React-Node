const mongoose = require('mongoose');

const employeeSchema = mongoose.Schema({
    employee_Id: String,    //PK
    name: String,
    cnic: Date,
    mobileNumber: String,
    password: String,
    joiningDate: {
        type: Date,
        default: Date.now
    },
    onJob: {
        type: Boolean,
        default: true
    }
})

const Order = mongoose.model('Order', orderSchema);
