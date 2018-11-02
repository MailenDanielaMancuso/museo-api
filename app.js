'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const api = require('./routers')


app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())
app.use(function(req,res,next){
    res.header('Access-Control-Allow-Origin',"*");
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    res.header('Acess-Control-Allow-Headers', 'Content-Type');
    next();
})

app.use('/api',api)

module.exports = app
