const register = require("./registrer")
const login = require("./login")
const getUserById = require("./getUserById")
const deleteUserbyId =require("./deleteUserbyId")


module.exports = {
    register,
    login,
    getUserById,
    deleteUserbyId
}