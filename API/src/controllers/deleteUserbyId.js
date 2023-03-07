
const Usuario = require("../model/usuario");


const deleteUserbyId = async (req, res) => {
  const { usuarioId } = req.params;
  await Usuario.findByIdAndDelete(usuarioId);

  // code 200 is ok too
  res.status(204).json("Usuario eliminado");
};
    

module.exports = deleteUserbyId;