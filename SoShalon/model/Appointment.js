var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AppointmentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String, 
        required: true
    },
    date: {
        type: Date, 
        required: false
    }, 
    time: {
        type: String, 
        required: false
    }, 
    messenger: {
        type: String,
        required: false,
        unique: true
    },
    description: {
        type: String, 
        required: false
    },
    service: {
        type: String,
        required: false
    },
    phone_no: {
        type: String,
        required: false
    }
});

var Appointment = mongoose.model('Appointment', AppointmentSchema);
module.exports = Appointment;