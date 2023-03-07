const mongoose = require('mongoose');


// MongoDb Connection

const MONGODB_URL = "mongodb://localhost/autenticacionLocalLT"
const db = async () => {
    await mongoose
    .connect(MONGODB_URL)
    .then(()=> console.log("Conected to MDB"))
    .catch((error)=> console.error(error));
}


module.exports = db;