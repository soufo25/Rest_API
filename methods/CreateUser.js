const Users = require("../models/Users")


const people = [
      { name: "Roberts Frank", age: 25, job: "Teacher" },
      { name: "Solomon Henckel", age: 28, job: "Accountant" },
       { name: "Peterson Grey", age: 45, job: "Developer" },
       {name: "Dennis Moore", age: 30, job: "Developer" }
     ];

async function createUsers(req, res) {
    try {
      const arrayOfUser = req.body.people
      const listOfUser = await Users.insertMany(arrayOfUser);
      console.log(listOfUser);
      res.status(200).send("ok");
    } catch (error) {
      console.log(error);
      res.status(500).send(error)
    }
  };
  
  module.exports = { createUsers };