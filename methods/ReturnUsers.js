const Users = require("../models/Users")



async function returnUsers(req, res) {
    try {
      
      const list = await Users.find();
      console.log(list);
      res.status(200).send("ok");
    } catch (error) {
      console.log(error);
      res.status(500).send(error)
    }
  };
  
  module.exports = { returnUsers };