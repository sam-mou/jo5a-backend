const mongoose = require("mongoose");
const { Schema } = mongoose;

const bookingSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true, 
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
      max: [16, "There must be less than 16 players."],
      validate: {
        validator: Number.isInteger,
        message: "The number of players must be an integer.",
      },
    },
  },
  {
    timestamps: true, 
  }
);

module.exports = mongoose.model("Booking", bookingSchema);
