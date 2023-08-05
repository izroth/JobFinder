const mongoose = require('mongoose');
const userschema = mongoose.Schema({
    employer_name: {
        type: String,
        required: true,
    }
    ,
    employer_logo: {
        type: String,
        
    },
    job_publisher: {
        type: String,
        required: true,
    }
    ,
    job_title: {
        type: String,
        required: true,
    }
    ,
    job_apply_link: {
        type: String,
        required: true,
    }
    ,
    job_description: {
        type: String,
        required: true,
    },
    
    job_city: {
        type: String,
        required: true,
    },
    job_state: {
        type: String,
        required: true,
    },
    job_country: {
        type: String,
        required: true,
    },
    
    job_google_link: {
        type: String,
    },
    Qulification: {
        type: String,
        required: true,
    }
    ,
    resposibilities: {
        type: String,
        required: true,
    },
    dateandtime: {
        type: Date,
        default: Date.now,
    }
});
module.exports = mongoose.model('jobs', userschema);

