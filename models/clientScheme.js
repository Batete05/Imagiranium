const mongoose = require("mongoose")

const clientScheme = new mongoose.Schema({
     name: {
          type: String,
          required: true
     },
     email: {
          type: String,
          unique: true,
          required: true
     },
     phoneNumber: {
          type: String,
          unique: true,
          required: true
     },
     password: {
          type: String,
          required: true
     }
})
const client = new mongoose.model("client", clientScheme)
module.exports = client