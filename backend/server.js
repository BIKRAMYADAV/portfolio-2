const express = require('express')
const dotenv = require('dotenv')
dotenv.config()
const PORT = process.env.PORT
const app = express()
const expressApp = require('./src/express-app')
const {mongoConnect} = require('./src/db/mongo-connection')
const cors = require('cors')
app.use(cors());
expressApp(app);
mongoConnect();
app.listen(PORT, () => {
    console.log('The app is listening on port: ',PORT);
})