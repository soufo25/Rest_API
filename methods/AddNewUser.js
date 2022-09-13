const Users = require("../models/Users");


async function newUser(req, res, save) {
    try {
      const newPerson = await Users.create({name:"Victor Louis", age: 32, job: "Marketing"});
      console.log(newPerson);
      res.status(200).send("ok");
    } catch (error) {
      console.log(error);
      res.status(500).send(error)
     newPerson.save()
    }
  };
  
  module.exports = { newUser };