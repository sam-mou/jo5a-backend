const Booking = require("../models/Booking.model");
const mongoose = require("mongoose");

// Get all bookings
exports.getAllBookings = (req, res, next) => {
  Booking.find()
    .populate("userId", "username email")
    .populate("pitchId", "name location")
    .then((bookings) => {
      res.status(200).json(bookings);
    })
    .catch((error) => {
      next(error);
    });
};

// Get bookings for the logged-in user
exports.getUserBookings = (req, res, next) => {
  Booking.find({ userId: req.user.id })
    .populate("pitchId", "name location")
    .then((bookings) => {
      res.status(200).json(bookings);
    })
    .catch((error) => {
      next(error);
    });
};

// Create a new booking
exports.createBooking = (req, res, next) => {
    const { pitchId, numberOfPlayers, date, startTime, endTime } = req.body;
  
    console.log("User ID:", req.user._id); // Log the user ID for debugging
  
    Booking.create({
      userId: req.user._id, // No need for explicit casting
      pitchId, // Mongoose will cast this to ObjectId if valid
      numberOfPlayers,
      date,
      startTime,
      endTime,
    })
      .then((booking) => {
        res.status(201).json(booking);
      })
      .catch((error) => {
        console.error("Error creating booking:", error); // Log the error for debugging
        next(error);
      });
  };
  

// Delete a booking
exports.deleteBooking = (req, res, next) => {
  Booking.findByIdAndDelete(req.params.id)
    .then((booking) => {
      if (!booking) {
        return res.status(404).json({ message: "Booking not found" });
      }
      res.status(200).json({ message: "Booking deleted successfully" });
    })
    .catch((error) => {
      next(error);
    });
};
