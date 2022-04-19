const batch= require("../models/batchModel")
const developer=require("../models//developerModel")
const { param } = require("../routes/route")
// -----------------------1-------------------------------

const createBatch= async function (req, res) {
    let data=req.body
    let batchdata= await batch.create(data)
    res.send({msg: batchdata})
}

// -------------------------2------------------------------
const createDeveloper= async function (req, res) {
    let data=req.body
    let developerData= await developer.create(data)
    res.send({msg: developerData})
}

// // -----------------------------3-----------------------

const scholarshipDev= async function (req, res) {
   let data=await developer.find({$and:[{gender:"female"},{percentage:{$gte:70}}]})
    res.send({msg:data})
}

// // ----------------------4----------------------
const developers= async function (req, res) {
    let data=req.query
    let data2=await batch.find({program:data.program}).select({_id:1})
    let details= await developer.find({percentage:{$gte:data.percentage},batch:data2}).populate('batch')
    res.send({msg: details})

}

module.exports.createBatch= createBatch
module.exports.createDeveloper=createDeveloper
module.exports.scholarshipDev= scholarshipDev
module.exports.developers= developers