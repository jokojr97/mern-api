const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema({
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    username: {
        type: String,
        require: true
    },
    image: {
        type: String,
        require: true
    },
    level: {
        type: Object,
        require: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('User', User)