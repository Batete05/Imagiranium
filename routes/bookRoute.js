const express = require('express')
const reservationController = require('../controllers/book')
const router = express.Router();
//retrieve all reserved places
router.get('/', reservationController.retrieveAll)
//reserve a place
router.post('/', reservationController.reservePlace)
router.delete('/:id', reservationController.cancel)
module.exports = router