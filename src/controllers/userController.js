const userService = require("../services/userService");


const createUser = async (req, res) =>{
    try{
        const user = await userService.registerUser(req.body);
        res.status(201).json(user);
        //print the output
        console.log(user);
    } catch(error){
        res.status(500).json({
            message: error.message,
        }
        )
    }
};

const getUsers =  async (req, res) =>{
    try{
        const user = await userService.fetchUsers();
        res.json(user);
          console.log(user);
    } catch(error){
        res.status(500).json({
            message: error.message,
        });
    }
};


module.exports = {
  createUser,
  getUsers,
};