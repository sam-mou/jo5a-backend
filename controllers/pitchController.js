const FootballPitch = require("../models/FootballPitch.model");

// Get all pitches
const getAllPitches = (req, res, next) => {
  FootballPitch.find()
    .then((pitches) => {
      res.status(200).json(pitches);
    })
    .catch((error) => {
      next(error);
    });
};

// Get a single pitch by ID
const getPitchById = (req, res, next) => {
    const pitchId = req.params.id;
    console.log("Fetching pitch with ID:", pitchId); 
  
    FootballPitch.findById(pitchId)
      .then((pitch) => {
        if (!pitch) {
          console.error("Pitch not found for ID:", pitchId); 
          return res.status(404).json({ message: "Pitch not found" });
        }
        console.log("Pitch found:", pitch);
        res.status(200).json(pitch);
      })
      .catch((error) => {
        console.error("Error fetching pitch by ID:", error); 
        next(error);
      });
  };
  

// Create a new pitch
const createPitch = (req, res, next) => {
  const { name, location, description, capacity, type, imageUrl } = req.body;

  FootballPitch.create({ name, location, description, capacity, type, imageUrl })
    .then((newPitch) => {
      res.status(201).json(newPitch);
    })
    .catch((error) => {
      next(error);
    });
};

// Update an existing pitch
const updatePitch = (req, res, next) => {
  FootballPitch.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
    .then((updatedPitch) => {
      if (!updatedPitch) {
        return res.status(404).json({ message: "Pitch not found" });
      }
      res.status(200).json(updatedPitch);
    })
    .catch((error) => {
      next(error);
    });
};

// Delete a pitch
const deletePitch = (req, res, next) => {
  FootballPitch.findByIdAndDelete(req.params.id)
    .then((deletedPitch) => {
      if (!deletedPitch) {
        return res.status(404).json({ message: "Pitch not found" });
      }
      res.status(200).json({ message: "Pitch deleted successfully" });
    })
    .catch((error) => {
      next(error);
    });
};

// Export all controller functions
module.exports = {
  getAllPitches,
  getPitchById,
  createPitch,
  updatePitch,
  deletePitch,
};
