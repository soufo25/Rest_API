const mongoose = require("mongoose")

const usersSchema = new mongoose.Schema({
    name: String,
    age: Number,
   job: String
  
});

module.exports = mongoose.model("Users", usersSchema);