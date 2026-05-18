const userRepository = require("../repositories/userRepository");

const registeruser = async (data) =>{
    return await userRepository.createUser(data);
};

const fetchUsers = async () =>{
    return await userRepository.getUsers();
};

module.exports = {
    registeruser,
    fetchUsers,
};


