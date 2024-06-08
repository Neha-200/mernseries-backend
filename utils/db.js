const mongoose = require("mongoose");

// const URI = "mongodb://127.0.0.1:27017/mern_admin";
// mongoose.connect(URI);
const URI = process.env.MONGODB_URI;
// const URI = "mongodb+srv://bro:bro12345@cluster0.gnucrwg.mongodb.net/mern_admin?retryWrites=true&w=majority&appName=Cluster0";

const connectDb = async() => {
    try {
       await mongoose.connect(URI);
       console.log('connection succesfull to db'); 
    } catch (error) {
        console.error(error.message);
        process.exit(0);
    }
}

module.exports = connectDb;