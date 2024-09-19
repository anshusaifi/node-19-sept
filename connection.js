const mongoose = require('mongoose');

async function connection(){
    try { 
        await mongoose.connect("mongodb://127.0.0.1:27017/batch-3");
        console.log("database connected");
        

    } catch (error) {
        console.log(error)

    }
}

module.exports = connection;