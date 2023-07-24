const express = require('express')
const ejs=require('ejs');
const bodyParser = require('body-parser')
const mongoose = require("mongoose")
const dbConnect = require('./dbConnect.js')
const bookRoute = require('./routes/bookRoute.js')
const clientRoute = require('./routes/clientRoute.js')
const app = express()

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use('/book', bookRoute)
app.use('/client', clientRoute)
mongoose.set('strictQuery', false)
mongoose.connect(dbConnect.DATABASE_URI, {
     useNewUrlParser: true,
     useUnifiedTopology: true
}).then(() =>{
     console.log("database connected successfully");
}).catch((err) =>{
     console.log(`Unable to connect to the database ${err}`);
     process.exit()
})
app.get('/', (req, res) =>{
     res.render('booking.ejs')
})
app.listen(5005, () =>{
     console.log("server running on http://localhost:5005");
})