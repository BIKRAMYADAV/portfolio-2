const express = require('express')
const dotenv = require('dotenv')
dotenv.config()
const PORT = process.env.PORT
const app = express()
const expressApp = require('./src/express-app')

expressApp(app);

app.listen(PORT, () => {
    console.log('The app is listening on port: ',PORT);
})