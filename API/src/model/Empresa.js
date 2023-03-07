const { model, Schema } = require("mongoose");

const empresaSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    nit: {
        type: String,
        required: true, 
    },
    direccion: {type: String,
                unique: false},
    phone: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
  
);

module.exports = model("Empresa", empresaSchema);