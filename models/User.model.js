const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

// Define the User Schema
const userSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required."],
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Password is required."],
    },
    username: {
      type: String,
      required: [true, "Username is required."],
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);


const User = model("User", userSchema);

module.exports = User;
