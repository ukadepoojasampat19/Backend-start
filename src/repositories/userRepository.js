const user = require("../models/userModel");

const createUser = async (data) =>{
    return await user.create(data);
};

const getusers = async () =>{
    return await user.find();
};

module.exports = {
    createUser,
    getusers
};
