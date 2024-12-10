const mongoose = require('mongoose')

const URI = "https://cloud.mongodb.com/v2/66fc8c5ce5ffdb6e20748ad3#/metrics/replicaSet/66fc8cef232135128eb11989/explorer/Final/customers/find"

mongoose.set('strictQuery', false)

mongoose.connect(URI)
  .then(()=>console.log('Connect DB Success'))
  .catch((err)=>console.log('Connect DB Fail ' + err))

module.exports = mongoose