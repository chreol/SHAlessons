const express = require('express')
const app = express()
app.use(express.json())// use bult in JSON middle to automatically paerse json

const router = require("/router")(app)
app.listen(3000, ()=> console.log('Example app listening ob port 3000!'))