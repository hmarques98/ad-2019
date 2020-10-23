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
