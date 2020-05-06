const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const port = process.env.PORT || 4000;
const Login = require("./Login");
const mongoose = require("mongoose");
const morgan = require("morgan");
const compression = require("compression");
const mongoDB_Atlas =
  "mongodb+srv://PhanidharBeeram:Phani12zebra@heroku-y2fob.mongodb.net/test?retryWrites=true&w=majority";
const mLab =
  "mongodb://Phanidharbeeram:949297920413s@ds259175.mlab.com:59175/heroku_qh474hv5";
app.use(express.static("./build"));

app.use(bodyParser.json());
app.use(cors());
app.use(morgan("common"));
app.use(compression());
mongoose.connect(mongoDB_Atlas, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 15000,
});
mongoose.connection.on("connected",()=> {
  console.log("Mongoose default connection is open to ", mongoDB_Atlas)
});

mongoose.connection.on("error", function (err) {
  console.log("Mongoose default connection has occured " + err + " error");
});

mongoose.connection.on("disconnected", function () {
  console.log("Mongoose default connection is disconnected")
});

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});
app.post("/login", (req, res) => {
  console.log(req.body);
  let newLogin = new Login({
    email: req.body.email,
    password: req.body.password,
  });
  newLogin.save((err, saved) => {
    if (saved) {
      res.json({ msg: "User Logged In" });
    } else {
      res.json("user notloggedin");
    }
  });
});
app.listen(port, (req, res) => {
  console.log("running ");
});
