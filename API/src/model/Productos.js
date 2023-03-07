const { model, Schema } = require("mongoose");

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    company: {
        type: String,
        required: true,
    },
    category: {type: String,
                unique: false},
    price: {
      type: Number,
      default: 0,
    },
    imgURL: String,
  },
  {
    timestamps: true,
    versionKey: false,
  }
  
);

module.exports = model("Product", productSchema);