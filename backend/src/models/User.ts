import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    draw: [
      {
        name: String,
        email: String,
        secretFriend: String,
      },
    ],

    didWho: {
      type: String,
      default: "Henrique",
    },
  },
  {
    timestamps: {
      createdAt: true,
    },
    collection: "draws",
  }
);

const User = mongoose.model("User", UserSchema);
export default User;
// name: {
//   type: String,
//   trim: true,
// },
// email: {
//   type: String,
//   trim: true,
//   lowercase: true,
// },
// secretFriend: {
//   type: String,
//   trim: true,
//   lowercase: true,
// },
