import mongoose from "mongoose";

const Schema = mongoose.Schema;

var UsefullMessageSchema = new Schema(
  {
    isUsed: {
      type: Boolean,
      default: false,
    },
    text: {
      type: String,
    },
  },
  { timestamps: true }
);

const UsefullMessage = mongoose.model("Usefull_message", UsefullMessageSchema);

export default UsefullMessage;
