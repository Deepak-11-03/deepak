const printDate= function(){
    let currentDate =new Date()
    console.log("today date is  ",currentDate.getDate())
};
const printMonth= function(){
    let currentMonth=new 
    console.log(" The month is ",currentMonth.getMonth() +1 )
};
const getBatchInfo =function(){
    console.log("Uranium, W2D03, the topic for today is Nodejs module system")
};
module.exports.date=printDate
module.exports.month=printMonth
module.exports.batch=getBatchInfo