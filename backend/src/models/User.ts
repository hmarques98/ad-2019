import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  secretFriend: {
    type: String,
    default: null,
    trim: true,
    lowercase: true,
  },
});

const User = mongoose.model("User", UserSchema);
export default User;
