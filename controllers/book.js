const Reservation = require('../models/reservationScheme')

exports.reservePlace = async (req, res) =>{
     const newReservation = new Reservation({
          email: req.body.email,
          destination: req.body.destination,
          time: req.body.time,
          numberOfPeople: req.body.numberOfPeople,
          details: req.body.details
     })
     await newReservation.save()
     .then(data =>{
          res.status(200).send({
               message: "Place reserved successully, Thanks for your reservation!!",
               place: data
          })
     }).catch(err =>{
          res.status(500).send({
               message: "Internal server error",
               error: err.message
          })
     })
}
exports.retrieveAll = async (req, res) =>{
     try {
          const reservations = await Reservation.find()
          res.status(200).json(reservations)
     }
     catch(err){
          res.status(404).send(err)
     }
}

exports.cancel = async (req, res) => {
     await Reservation.findByIdAndRemove(req.params.id)
          .then(data => {
               if (!data) {
                    res.status(404).send({
                         message: `The reservation doesn't exist.`
                    });
               } else {
                    res.status(200).send({
                         message: "The reservation has been cancelled successfully."
                    });
               }
          }).catch(err => {
               res.status(500).send({
                    message: err.message
               });
          });
};