var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AppointmentSchema = new Schema({
    fullname: {
        type: String,
        required: true
    },
    address: {
        type: String, 
        required: true
    },
    messenger: {
        type: String,
        required: true
    },
    contactNo: {
        type: String,
        required: true
    },
    description: {
        type: String, 
        required: false
    },
    service: {
        type: Array,
        required: true
    },
    date: {
        type: Date, 
        required: true
    }, 
    time: {
        type: String, 
        required: true
    },
    SPfullname :{
        type: String,
        required: true
    },
    ServiceProviderId:{
        type: String,
        required: true
    }
    
});

var Appointment = mongoose.model('Appointment', AppointmentSchema);
module.exports = Appointment;