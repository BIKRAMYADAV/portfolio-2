const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()
const MONGO_URI = process.env.MONGO_URI

async function mongoConnect() {
    try{
        await mongoose.connect(MONGO_URI);
        console.log('Successfully connected to the database')
    } catch (error){
        console.error('There was an error in connecting to the database');
    }
}

module.exports = {mongoConnect}