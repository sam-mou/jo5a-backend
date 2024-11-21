const express = require("express");
const {
  getAllBookings,
  getUserBookings,
  createBooking,
  deleteBooking,
} = require("../controllers/bookingController");
const { isAuthenticated } = require("../middleware/jwt.middleware");

const router = express.Router();

router.get("/", isAuthenticated, getAllBookings); 
router.get("/user", isAuthenticated, getUserBookings); 
router.post("/", isAuthenticated, createBooking); 
router.delete("/:id", isAuthenticated, deleteBooking); 

module.exports = router;
