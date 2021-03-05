import mongoose from "mongoose";

const Schema = mongoose.Schema;

var MarathonSchema = new Schema(
  {
    startDate: {
      type: String,
      index: true,
    },
    endDate: {
      type: String,
    },
    isActive: {
      type: Boolean,
    },
    countOfUsers: {
      type: Number,
    },
    deadline: {
      type: String,
    },
  },
  { timestamps: true }
);

const Marathon = mongoose.model("Marathon", MarathonSchema);

export default Marathon;
