const { lowerCase, upperCase } = require("lodash");

const trim=function(){
    console.log("the string after reult is :",'  funtionup   '.trim())
};
const lower=function changeToLowerCase(){
    console.log("the string after using toLowerCase function is :",'FUNcTionUP'.toLowerCase())
};
const upper=function changeToUpperCase(){
    console.log("the result after using toUpperCase function is :",'functiOnUP'.toUpperCase())
};
module.exports.trim=trim
module.exports.lower=lower
module.exports.upper=upper