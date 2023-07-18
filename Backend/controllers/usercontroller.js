const asynchandler = require("express-async-handler");
const Users = require("../models/usermodel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const register = asynchandler(async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    res.status(400).send("All fields are mandatory");
    
  }
  const emailinuse = await Users.findOne({ email: email });
  if (emailinuse) {
    res.status(400).send("Email already in use");
  }
  const hashedpassword = await bcrypt.hash(password, 10);
  const added = await Users.create({
    username: username,
    email: email,
    password: hashedpassword,
  });
  if (added) {
    res.status(200).send("Registration Successful. Redirecting...");
    
  } else {
    res.status(400).send("User registration unsuccessful");
    
  }
});
const login = asynchandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }
  const usercheck = await Users.findOne({ email: email });
  if (usercheck && (await bcrypt.compare(password, usercheck.password))) {
    const accesstoken = jwt.sign(
      {
        user: {
          username: usercheck.username,
          email: usercheck.email,
          id: usercheck.id,
        },
      },
      process.env.ACC_TOKEN,

      { expiresIn: "25m" }
    );
    process.env.ACCESSTOKEN = accesstoken;
    res.json(accesstoken);
    //httpreq(accesstoken);
  } else {
    res.status(401);
    throw new Error("Incorrect email id or password");
  }
});

const current = asynchandler(async (req, res) => {
  res.json(req.user); //req.user=decoded.user in accesstokenhandler
});

const logout = (req, res) => {
  process.env.ACCESSTOKEN = " ";
  res.json("logged out successfully");
};

module.exports = { register, login, current, logout };
