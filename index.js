require ('dotenv').config()
const express = require('express')
const massive = require('massive')
const products_controller = require('./products_controller')
const app = express()

const { SERVER_PORT, CONNECTION_STRING } = process.env

massive(CONNECTION_STRING).then(
dbInstance=>{
  app.set("db",dbInstance)
}).catch(err=>{
  console.log(`error ${err}`)
})

app.use(express.json())


app.listen(SERVER_PORT, ()=>{
console.log(`listening on port ${SERVER_PORT}`)
})

app.get('/api/products', products_controller.getAll)
app.get('/api/products/:id', products_controller.getOne)
app.put('/api/products/:id', products_controller.update)
app.post('/api/products', products_controller.create)
app.delete('/api/products/:id', products_controller.delete)