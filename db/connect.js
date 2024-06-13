const mongoose = require('mongoose') ;

 async function connectToDB () {
    try {
        await mongoose.connect(process.env.DATABASE_URL)
        console.log("connected to mongodb!");
    } catch (error) {
        console.log("error in connecting to mongodb" + error.message);
    }
}

module.exports = connectToDB;