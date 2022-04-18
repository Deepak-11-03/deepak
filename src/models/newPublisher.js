const mongoose = require('mongoose');
const publishers = new mongoose.Schema( {
    name:String,
    headquarter:String
}, { timestamps: true });

module.exports = mongoose.model('newPublisher', publishers) 