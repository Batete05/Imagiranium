const express = require('express')
const clientController = require('../controllers/clients')
const router = express.Router();

router.get('/', clientController.findAll)
router.get('/:id', clientController.findOne)
router.post('/add', clientController.addClient)
router.put('/:id', clientController.update)
router.delete('/:id', clientController.remove)

module.exports = router