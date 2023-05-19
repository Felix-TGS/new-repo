const urlRouter = require('./route/router')
const connect = require('./db')
const express = require('express')
const app = express()
const port = 5000

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, DELETE, PATCH")
    res.header("Access-Control-Allow-Headers", "*");
    next();
})

app.use(express.json())
app.use('/', urlRouter)
app.listen(port)

connect()