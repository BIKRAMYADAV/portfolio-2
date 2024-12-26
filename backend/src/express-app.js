const {message} = require('./api')
const express = require('express')


module.exports = (app) => {
app.use(express.json());

message(app);
}