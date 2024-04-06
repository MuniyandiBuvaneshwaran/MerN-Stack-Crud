import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    companyName: {
      type: String,
    },
    phone: {
      type: Number,
    },
    email: {
      type: String,
    },
    location: {
      type: String,
    },
    link:{
      type: String,
    },
    description:{
      type: String,
    }
  },
  {
    timestamps: true,
  }
);

const userModel = mongoose.model("User", userSchema);

export default userModel;