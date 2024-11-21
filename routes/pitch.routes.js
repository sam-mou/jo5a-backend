const express = require("express");
const {
  getAllPitches,
  getPitchById,
  createPitch,
  updatePitch,
  deletePitch,
} = require("../controllers/pitchController");
const authenticateJWT = require("../middleware/jwt.middleware");

const router = express.Router();

const { isAuthenticated } = require("../middleware/jwt.middleware");

router.get("/", isAuthenticated, getAllPitches);
router.get("/:id", isAuthenticated, getPitchById);
router.post("/", isAuthenticated, createPitch);
router.put("/:id", isAuthenticated, updatePitch);
router.delete("/:id", isAuthenticated, deletePitch);

module.exports = router;
