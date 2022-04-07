const express = require('express');
const logger= require('../logger/logger.js')
const datefun= require("../util/helper.js")
const formatter= require("../validator/formatter.js")
const router = express.Router();
var _ = require('lodash');
router.get('/test-me', function (req, res) {

    formatter.trim();
    formatter.lower();
    formatter.upper();
    // console.log('The date is:',datefun.date)
    // datefun.date()
    // console.log('The month is:',datefun.month)
    // datefun.month()
    // console.log('The date is:',datefun.batch)
    // datefun.batch()
    console.log(logger.logging)
    logger.logging()
    res.send('My first ever api!')
});
router.get('/hello', function (req, res){
    console.log('I am inside the hello route handler')
    let arr=["january","february","march","april","may","june","july","august","september","october","november","december"]
    let parts=_.chunk(arr,3)
    console.log(parts)


    // let arr2=['1','3','5','7','9','11','13','15','17','19']
    // let parts=_.tail(arr2)
    // console.log(parts)


        let a=[1,2,1,5]
        let b=[3,2,6,4]
        let c=[5,4,2,4]
        let d=[1,2,4,5,3]
        console.log("final ",_.union(a,b,c,d))


        let keyValue=[["horror","The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]]
        console.log('the object created from array is:',_.fromPairs(keyValue))

});
router.get('/test-me2', function (req, res) {
    console.log('I am inside the second route handler')
    res.send('My second ever api!')
});


router.get('/test-me5', function (req, res) {
    res.send('My final ever api!')
});git 

router.get('/test-me3', function (req, res) {
    res.send('My first ever api!')
});

router.get('/test-me4', function (req, res) {
    res.send('My first ever api!')
});

module.exports = router;
// adding this comment for no reason