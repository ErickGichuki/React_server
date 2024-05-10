const express = require('express')
const jsonServer = require('json-server')

const server = express()
server.use('/products',jsonServer.router('db.json'))
server.listen(process.env.PORT || 5000, () => {
  console.log('JSON Server is running')
})