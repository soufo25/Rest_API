const Users = require("../models/Users")


async function editUser(req, res) {
    try {
       const ObjectId = req.body._Id
      const nameChange = await Users.findIdAndUpdate({_Id:ObjectId}, {$set:{name:"Jackie"}});
      console.log(nameChange);
      res.status(200).send("ok");
    } catch (error) {
      console.log(error);
      res.status(500).send(error)
      save.newPerson()
    }
  };
  
  module.exports = { editUser };