const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const controllers = require("./controllers");
const productRoutes = require('./Routes/productRoutes');
const empresaRoutes = require('./Routes/empresaRoute');
require("dotenv/config");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/product', productRoutes);
app.use('/api/company', empresaRoutes);
app.get("/user");
app.post("/register", controllers.register);
app.post("/login", controllers.login);
app.delete("/deleteUserbyId", controllers.deleteUserbyId);

const port = process.env.PORT || 9000;

// MongoDB Connect
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB Atlas');
    app.listen(port, () => {
      console.log("Server listening on port", port);
    });
  })
  .catch((error) => console.error(error));

  module.exports = app;