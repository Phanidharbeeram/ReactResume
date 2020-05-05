const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const port = process.env.PORT || 4000;
const Login = require("./Login");
const Mongoose = require("mongoose");
const morgan = require("morgan");
const compression = require("compression");
app.use(express.static("./build"));

app.use(bodyParser.json());
app.use(cors());
app.use(morgan("common"));
app.use(compression());
Mongoose.connect(
  "mongodb+srv://PhanidharBeeram:Phani12zebra@heroku-y2fob.mongodb.net/test?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 15000,
  }
);

// Mongoose.connection((req,res)=>{
//     console.log('MongoDb Connected')
// })
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
