const asynchandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const validatetoken = asynchandler(async (req, res, next) => {
  let token;
  //const authheader=req.headers.authorization||req.headers.Authorization;
  const authheader = "Bearer " + process.env.ACCESSTOKEN;

  token = authheader.split(" ")[1];
  jwt.verify(token, process.env.ACC_TOKEN, (err, decoded) => {
    if (err) {
      res.status(401);
      throw new Error("User not authorized");
    }

    req.user = decoded.user;

    console.log(decoded);
    next();
  });
});
module.exports = validatetoken;
