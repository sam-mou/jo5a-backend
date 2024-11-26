const { Schema, model } = require("mongoose");

const pitchSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Pitch name is required."],
    },
    location: {
      type: String,
      required: [true, "Location is required."],
    },
    startTime: {
      type: String,
      required: [true, "Start time is required."],
      validate: {
        validator: (value) => /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/.test(value),
        message: "Start time must be in HH:mm format.",
      },
    },
    date: {
      type: Date,
      required: [true, "Date is required."],
      validate: {
        validator: (value) => value >= new Date(),
        message: "Date must be in the future.",
      },
    },
    capacity: {
      type: Number,
      required: [true, "Capacity is required."],
      validate: {
        validator: Number.isInteger,
        message: "Capacity must be an integer.",
      },
    },
    type: {
      type: String,
      required: [true, "Pitch type is required."],
    },
    description: {
      type: String,
      required: [true, "Description is required."],
    },
    imageUrl: {
      type: String,
      required: [true, "Image is required."],
    },
  },
  {
    timestamps: true,
  }
);

const FootballPitch = model("FootballPitch", pitchSchema);

module.exports = FootballPitch;
