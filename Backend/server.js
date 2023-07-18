const express = require("express");
const app = express();
const connectDb = require("./config/dbconnection");
const errorhandler = require("./middleware/errorhandler");
const accesstokenhandler = require("./middleware/accesstokenhandler2");
const dotenv = require("dotenv").config();
const quesroutes = require("./routes/quesroutes");
const userroutes = require("./routes/userroutes");
const cors = require('cors');
const port = 5000;
connectDb();
app.use(cors());

app.use(express.json());
app.use("/kp/questions", quesroutes);
app.use("/kp/users", userroutes);
app.use(errorhandler);

app.listen(port, () => {
  console.log("Server running on port " + port);
});
