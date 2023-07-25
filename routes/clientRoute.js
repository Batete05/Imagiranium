const express = require('express')
const clientController = require('../controllers/clients')
const router = express.Router();

router.get('/', (req,res)=>{
     res.render("signup.ejs")
})

router.get('/login', (req,res)=>{
     res.render("login.ejs")
})

router.get("/profile", (req,res)=>{
     res.render("profile.ejs")
})
router.get('/getAll', clientController.findAll)
router.get('/:id', clientController.findOne)
router.post('/addClient', clientController.addClient)
router.put('/:id', clientController.update)
router.delete('/:id', clientController.remove)

module.exports = router