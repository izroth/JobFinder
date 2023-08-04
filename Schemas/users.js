const mongoose = require('mongoose');
const userschema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    }
    ,
    password: {
        type: String,
        required: true,
        trim: true,
    },
    token: {
        type: String,
        required: true,
    }

    ,
    dateandtime: {
        type: Date,
        default: Date.now,
    }
});
module.exports = mongoose.model('users', userschema);
