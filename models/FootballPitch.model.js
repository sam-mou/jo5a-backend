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
    description: {
      type: String,
      required: [true, "Description is required."],
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
    imageUrl: {
      type: String,
      required: [true, "Image is required."],
    }
  },
);

const FootballPitch = model("FootballPitch", pitchSchema);

module.exports = FootballPitch;
