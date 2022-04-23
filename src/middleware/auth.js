const { status } = require("express/lib/response");
const jwt = require("jsonwebtoken");
const authenticate = function (req, res, next) {
  try{
  let token = req.headers["x-auth-token"]
  if (!token)
    token = req.headers["x-auth-token"];
  if (!token)
    return res.send({ status: false, msg: "token must be present in the request header" })
  let decodedToken = jwt.verify(token, "functionup-uranium");
  if (!decodedToken){
    return res.status(400).send({ status: false, msg: "token not found" });
  }
}
catch{
  res.status(500).send({status:false,msg:"invalid token"})
  return
}
    next();
}


const authorise = async function (req, res, next) {
  try {
    let token = req.headers["x-Auth-token"];
    if (!token) token = req.headers["x-auth-token"];
    if (!token)
      return res.send({ status: false, msg: "token must be present" });
    let decodedToken = jwt.verify(token, "functionup-uranium");
    if (!decodedToken)
      return res.status(400).send({ status: false, msg: "token is invalid" });
    let userlogged = decodedToken.userId
    let userDetails = req.params.userId;
    if (userDetails !== userlogged)
      return res.status(404).send({ status: false, msg: "No such user exists" });
    }
   catch (err) {
    console.log("This is the error :", err.message)
    res.status(500).send({ msg: "Error", error: err.message })
    return;
  }
  next();
}
module.exports.authenticate = authenticate
module.exports.authorise = authorise