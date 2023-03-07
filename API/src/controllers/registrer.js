const bcrypt = require("bcrypt");
const Usuario = require("../model/usuario");

const register = async (req, res) => {
  const { username, email, password, rol } = req.body;

  Usuario.findOne({ email }).then((usuario) => {
    if (usuario) {
      return res.json({ mensaje: "Ya existe un usuario con ese correo" });
    } else if (!username || !email || !password) {
      return res.json({ mensaje: "Falta el nombre / correo / contraseña" });
    } else {
      bcrypt.hash(password, 10, (error, contraseñaValidada) => {
        if (error) res.json({ error });
        else {
          const nuevoUsuario = new Usuario({
            username,
            email,
            password: contraseñaValidada,
            rol,
          });

          nuevoUsuario
            .save()
            .then((usuario) => {
              res.json({ mensaje: "Usuario creado correctamente", usuario });
            })
            .catch((error) => console.error(error));
        }
      });
    }
  });
};

module.exports = register;