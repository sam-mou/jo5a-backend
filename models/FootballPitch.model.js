const { Schema, model } = require("mongoose");

const pitchSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Pitch name is required."],
      trim: true,
    },
    location: {
      type: String,
      required: [true, "Location is required."],
      trim: true,
    },
    capacity: {
      type: Number,
      required: [true, "Capacity is required."],
      validate: {
        validator: Number.isInteger,
        message: "Capacity must be an integer.",
      },
    },
    isIndoor: {
      type: Boolean,
      required: [true, "Indoor status is required."],
    },
  },
  {
    timestamps: true, // Automatically adds `createdAt` and `updatedAt` fields
  }
);

const FootballPitch = model("FootballPitch", pitchSchema);

module.exports = FootballPitch;
