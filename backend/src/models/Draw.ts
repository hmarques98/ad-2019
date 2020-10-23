import mongoose from "mongoose";

const DrawSchema = new mongoose.Schema(
  {
    draw: [
      {
        name: String,
        email: String,
        secretFriend: String,
      },
    ],

    who: {
      type: String,
    },
  },
  {
    timestamps: {
      createdAt: true,
    },
    collection: "draws",
  }
);

const Draw = mongoose.model("Draw", DrawSchema);
export default Draw;
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
