const Users = require ("../models/Users")


async function findAndRemove(req, res) {
    try { 
      const removeUser = await Users.findByIdAndRemove('6319afaa4427d440c1dcd3ff')
      console.log(removeUser);
      res.status(200).send(removeUser);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }
  
  module.exports= {findAndRemove}

