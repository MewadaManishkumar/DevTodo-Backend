const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const main = async()=> {
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Database Connetecd Suucessfully");
    }
    catch(error){
        console.log("Error while connecting with database", error);
    }
}
main();

