const mongoose=require('mongoose')
const batch=require('../models/batchModel')
const ObjectId = mongoose.Schema.Types.ObjectId
const developer = new mongoose.Schema( {
    name: String,
    gender:{
        type: String,
        enum:["male","female","other"]
    },
    percentage:Number,
    batch:{
        type: ObjectId,
        ref: batch
    }
}, { timestamps: true });

module.exports = mongoose.model('Developer', developer)