import mongoose from "mongoose";

const Schema = mongoose.Schema;

var AngryMessagesSchema = new Schema(
  {
    text: {
      type: String,
      index: true,
    },
  },
  { timestamps: true }
);

const AngryMessage = mongoose.model("Angry_message", AngryMessagesSchema);

export default AngryMessage;
