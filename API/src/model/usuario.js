
const { model, Schema } = require("mongoose");

const UsuarioSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  rol: [
          "user",
        ],
});

module.exports = model("Usuario", UsuarioSchema);