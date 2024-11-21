const mongoose = require("mongoose");
const { Schema } = mongoose;

const bookingSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true, // Ensure it's marked as required
    },
    pitchId: {
      type: Schema.Types.ObjectId,
      ref: "FootballPitch",
      required: true,
    },
    numberOfPlayers: {
      type: Number,
      required: true,
      min: [1, "There must be at least one player."],
      max: [12, "There must be less than 12 players."],
      validate: {
        validator: Number.isInteger,
        message: "The number of players must be an integer.",
      },
    },
    date: {
      type: Date,
      required: true,
      validate: {
        validator: (value) => value >= new Date(),
        message: "Booking date must be in the future.",
      },
    },
    startTime: {
      type: String,
      required: true,
      validate: {
        validator: (value) => /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/.test(value),
        message: "Start time must be in HH:mm format.",
      },
    },
    endTime: {
      type: String,
      required: true,
      validate: {
        validator: (value) => /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/.test(value),
        message: "End time must be in HH:mm format.",
      },
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Booking", bookingSchema);
