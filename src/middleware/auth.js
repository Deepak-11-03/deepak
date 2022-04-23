const jwt = require("jsonwebtoken");
const authenticate = function(req, res, next) {
    let token = req.headers["x-auth-token"]
    if (!token) token = req.headers["x-auth-token"];
    if(!token) 
    return res.send({status: false, msg: "token must be present in the request header"})
    let decodedToken = jwt.verify(token, "functionup-thorium");
    if (!decodedToken)
     return res.send({ status: false, msg: "token is invalid" });
    next()
}


const authorise = function(req, res, next) {
    let token = req.headers["x-auth-token"]
    if (!token) token = req.headers["x-auth-token"];
    if(!token) 
    return res.send({status: false, msg: "token must be present in the request header"})
    let decodedToken = jwt.verify(token, "functionup-thorium");
    if (!decodedToken)
      return res.send({ status: false, msg: "token is invalid" });
    let userToBeModified = req.params.userId
    //userId for the logged-in user
    let userLoggedIn = decodedToken.userId

    //userId comparision to check if the logged-in user is requesting for their own data
    if(userToBeModified != userLoggedIn) 
    return res.send({status: false, msg: 'You can modify or update your own data'})
    next()
}

module.exports.authenticate=authenticate
module.exports.authorise=authorise
