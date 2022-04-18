const mongoose = require('mongoose');
const newAuthor = require('./newAuthor');
const newPublisher = require('./newPublisher');
const ObjectId = mongoose.Schema.Types.ObjectId
const books = new mongoose.Schema( {
    name: String,
    author:{
        type:ObjectId,
        ref:newAuthor,
    },
    price: Number,
    rating: Number,
    publisher:{
        type:ObjectId,
        ref: newPublisher,
    },
    isHardCover:{
        type:Boolean,
        default:false
    }
}, { timestamps: true });

module.exports = mongoose.model('newBook', books) 