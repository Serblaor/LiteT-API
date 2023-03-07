const express = require('express');
const cors = require('cors')
const db = require("./database/db")
const controllers = require("./controllers")
const productRoutes = require('./Routes/productRoutes')
const empresaRoutes = require('./Routes/empresaRoute')
require("dotenv/config")
// const authRoutes = require('./Routes/authRoutes')


const app = express();

// Middleware

app.use(cors());
app.use(express.json());


// Routes
app.use('/api/product', productRoutes)
app.use('/api/company', empresaRoutes)
// app.use('/api/auth', authRoutes)
app.get("/user");
app.post("/register", controllers.register);
app.post("/login", controllers.login);
app.delete("/deleteUserbyId", controllers.deleteUserbyId);

const port = process.env.PORT || 3001;

app.listen(port, ()=> {console.log("server lintening on port", port);
db();
});


//ca

module.exports = app;