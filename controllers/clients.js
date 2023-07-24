const client = require('../models/clientScheme')

exports.addClient = async (req, res) => {
     const newClient = new client({
          name: req.body.name,
          email: req.body.email,
          phoneNumber: req.body.phoneNumber,
          password: req.body.password
     })
     await newClient.save()
          .then(data => {
               res.status(200).send({
                    message: "User created successfully",
                    user: data
               })
          })
          .catch(err => {
               res.status(500).send({
                    message: "An error was found while creating the user",
                    Error: err
               })
          })
}

exports.findAll = async (req, res) => {
     try {
          const clients = await client.find()
          res.status(200).json(clients)
     }
     catch (err) {
          res.status(404).send(err)
     }
}

exports.findOne = async (req, res) => {
     try {
          const user = await client.findById(req.params.id);
          res.status(200).json(user);
     } catch (error) {
          res.status(404).json({ message: error.message });
     }
}

exports.update = async (req, res) => {
     const id = req.params.id;

     await client.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
          .then(data => {
               if (!data) {
                    res.status(404).send({
                         message: `User not found.`
                    });
               } else {
                    res.send({
                         message: "User updated successfully."
                    })
                    console.log("User updated successfully.");
               }
          }).catch(err => {
               res.status(500).send({
                    message: err.message
               });
          });
}

exports.remove = async (req, res) => {
     await client.findByIdAndRemove(req.params.id)
          .then(data => {
               if (!data) {
                    res.status(404).send({
                         message: `User not found.`
                    });
               } else {
                    res.send({
                         message: "User deleted successfully!"
                    });
               }
          }).catch(err => {
               res.status(500).send({
                    message: err.message
               });
          });
};