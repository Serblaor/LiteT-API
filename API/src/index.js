// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// require('dotenv').config();
// const controllers = require("./controllers")
// const productRoutes = require('./Routes/productRoutes')
// const empresaRoutes = require('./Routes/empresaRoute')
// const authRoutes = require('./Routes/authRoutes')

// const app = express();
// const port = process.env.PORT || 9000;




// // Middleware

// app.use(express.json());
// app.use(cors());


// //Routes
// app.get('/', (req, res) => {
//     res.send('Welcome to my api')
// })
// app.use('/api/product', productRoutes)
// app.use('/api/company', empresaRoutes)
// app.use('/api/auth', authRoutes)
// app.get("/getUserById" );
// app.post("/register", controllers.register);
// app.post("/login", controllers.login);
// app.delete("/deleteUserbyId", controllers.deleteUserbyId);

// /// MongoDB Connect
// mongoose
// .connect(process.env.MONGODB_URI)
// .then(() => console.log('Connected to MongoDB Atlas'))
// .catch((error) => console.error(error));

// app.listen(port, ()=> {console.log("server lintening on port", port);

// });

