const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const leaderSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String,
        required: true
    },
    designation: {
        type: String,
        required: ''
    },
    abbr: {
        type: String,
        default: ''
    },
    description: {
        type: String,
        default: ''
    },
    featured: {
        type: Boolean,
        default: false
    }
}, {
        timestamps: true
    });

var Leaders = mongoose.model('Leaders', leaderSchema);
module.exports = Leaders;