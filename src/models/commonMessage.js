import mongoose from "mongoose";

const Schema = mongoose.Schema;

var CommonMessagesSchema = new Schema(
  {
    type: {
      type: String,
      index: true,
    },
    isForTrainer: {
      type: Boolean,
    },
    text: {
      type: String,
    },
  },
  { timestamps: true }
);

const CommonMessage = mongoose.model("Common_message", CommonMessagesSchema);

export default CommonMessage;
