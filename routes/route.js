const express = require('express');
const router = express.Router();

// ---------------------1----------------------------

let movieArr=['rang de basnasti', 'the shining', 'lord of the rings', 'batman begins']
router.get('/movies', function (req, res) {
    res.send(movieArr);
    console.log(movieArr);
});

// ------------------------2-----------------------------

router.get('/movies/:index', function (req, res) {
    const getNo=req.params.index;
    if (getNo < movieArr.length)
     {  
        res.send(movieArr[getNo])
        console.log(movieArr[getNo])
        }  
});

// ------------------------3------------------------------

router.get('/movies/:index', function (req, res) {
    const getNo=req.params.index;
    if (getNo == movieArr.length)
     {  
        res.send(movieArr[getNo])
    
        console.log(movieArr[getNo])
        }  
        else{
            res.send("Please use a valid index no.")
            console.log("please use a valid index no.")
        }

});

// ----------------------------4--------------------------------
        // Declare the array of object at global level
const movieArray= [ {       
    "id": 0,
    "name": "The Shining"
   }, {
    "id": 1,
    "name": "Incendies"
   }, {
    "id": 2,
    "name": "Rang de Basanti"
   }, {
    "id": 3,
    "name": "Finding Nemo"
   }]

router.get('/films', function (req, res) {

       res.send(movieArray)
       console.log(movieArray)

});

// ---------------------5--------------------

router.get('/films/:filmId', function (req, res) {
    const ids= req.params.filmId;
    if (ids < movieArray.length)
     {
        res.send(movieArray[ids])
        console.log(movieArray[ids])
    }
    else{
        res.send("no movie exist with this id"); 
        }
});
module.exports= router;
// adding this comment for no reason