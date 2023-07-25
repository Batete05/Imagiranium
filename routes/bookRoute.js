const express = require('express')
const reservationController = require('../controllers/book')
const router = express.Router();
//retrieve all reserved places
router.get('/', (req, res) =>{
     res.render('booking.ejs')
})
//reserve a place
router.post('/reserve', reservationController.reservePlace)
router.delete('/:id', reservationController.cancel)
module.exports = router