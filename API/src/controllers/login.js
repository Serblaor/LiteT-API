const bcrypt = require("bcrypt");
const Usuario = require("../model/usuario");


const login = async (req, res) => {
  const { email, password } = req.body;

  Usuario.findOne({ email }).then((usuario) => {
    if (!usuario) {
      return res.json({ mensaje: "Usuario no encontrado" });
    }

    bcrypt.compare(password, usuario.password).then((esCorrecta) => {
      if (esCorrecta) {
        const { id, username } = usuario;


        res.json({
          mensaje: "Usuario logeado correctamente",
          usuario: {
            id,
            username,
           
          },
        });
      } else {
        return res.json({ mensaje: "Contraseña incorrecta" });
      }
    });
  });
};

module.exports = login;