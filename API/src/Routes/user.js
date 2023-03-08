const express = require("express");
const Usuario = require("../Routes/user")
const router = express.Router();



//create user 
app.post("/register", controllers.register);

module.exports = router;