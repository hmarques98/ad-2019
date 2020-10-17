import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
  },
  secretFriend: {
    type: String,
    trim: true,
    lowercase: true,
  },
});

const User = mongoose.model("User", UserSchema);
export default User;
