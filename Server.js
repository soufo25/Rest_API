const mongoose = require("mongoose");
const {createUsers} = require("./methods/CreateUser")
const {returnUsers} = require("./methods/ReturnUsers")
const {  newUser }  = require("./methods/AddNewUser")
const {editUser }   = require("./methods/FindAndEdit")
const {findAndRemove} = require("./methods/RemoveUser")
const express = require("express");
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
require("dotenv").config();
const Port = 5000;
mongoose.connect(
    process.env.mongo,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log("Connected to db")
  );
  




  app.post("/create", createUsers);
  app.get("/return", returnUsers);
  app.post("/new", newUser);
  app.put("edituser", editUser )
  app.delete("remove", findAndRemove)
  








app.listen(Port, () => {
    console.log("app is running on port " + Port);
  });