const mongoose = require('mongoose');

const authors = new mongoose.Schema( {
    author_id: {
        type: Number,
        required: true
    },
    authorName: String,
    age: Number,
    address: String,
}, { timestamps: true });

module.exports = mongoose.model('Author', authors) 