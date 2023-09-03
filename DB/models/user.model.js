import { Schema, Types, model } from "mongoose";

const userSchema = new Schema(
  {
    phoneNumber: {
      type: String,
      unique: [true, "phone number must be unique value"],
      required: [true, "phone number is required"],
    },
    password: {
      type: String,
      required: [true, "password is required"],
    },
    active: {
      type: Boolean,
      default: false,
    },
    profilePicture: {
      type: String,
    },
    blocked: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);
const userModel = model("userModel",userSchema)
export default userModel

