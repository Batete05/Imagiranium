const mongoose = require("mongoose")
const reserved = new mongoose.Schema({
     email: {
          type: String,
          required: true,
          unique: true
     },
     numberOfPeople: {
          type: Number,
          required: true
     },
     destination: {
          type: String,
          required: true
     },
     time: {
          type: String,
          required: true
     },
     details: {
          type: String,
          required: false
     }
})
var reserve = new mongoose.model('reservation', reserved)
module.exports = reserve
