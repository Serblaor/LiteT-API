// const Usuario = require("../model/usuario.js");
// const jwt = require('jsonwebtoken')
// const config = require('../config.js')

// const singUp = async (req, res) => {
//    const { username, email, password, roles} = req.body;
//    try{
//     const newUsuario = new Usuario({
//         username,
//         email,
//         password: await Usuario.encryptPassword(password)
//     })
//     const usuarioSaved = await newUsuario.save()
//     const token = jwt.sign({id: usuarioSaved._id}, config.SECRET,{
//         expireIn: 86400
//     })
//     res.status(202).json(token);
// } catch (error) {
//         console.log(error);
//         return res.status(500).json(error);
//       }
//     }


// const singIn = async (req, res) => {
//     res.json('singIn')
// }

// module.exports = {
//     singUp,
//     singIn
// }