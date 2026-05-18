const userRepository = require("../repositories/userRepositories");

const registeruser = async (data) =>{
    return await userRepository.createUser(data);
};

const fetchUsers = async () =>{
    return await userRepository.getUsers();
};

module.exports = {
    registerUser,
    fetchUsers,
};


