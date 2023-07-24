const reservation = require('../models/reservationScheme')

exports.reservePlace = async (req, res) =>{
     const newReservation = new reservation({
          email: req.body.email,
          numberOfPeople: req.body.amount,
          destinaton: req.body.destinaton,
          time: req.body.time
     })
     await newReservation.save()
     .then(data =>{
          res.status(200).send({
               message: "Place reserved successully, Thanks for your reservation!!",
               place: data
          })
     }).catch(err =>{
          res.status(500).send({
               message: "An error occured during reservation process",
               error: err
          })
     })
}
exports.retrieveAll = async (req, res) =>{
     try {
          const reservations = await reservation.find()
          res.status(200).json(reservations)
     }
     catch(err){
          res.status(404).send(err)
     }
}

exports.cancel = async (req, res) => {
     await client.findByIdAndRemove(req.params.id)
          .then(data => {
               if (!data) {
                    res.status(404).send({
                         message: `The reservation doesn't exist.`
                    });
               } else {
                    res.send({
                         message: "The reservation has been cancelled successfully."
                    });
               }
          }).catch(err => {
               res.status(500).send({
                    message: err.message
               });
          });
};