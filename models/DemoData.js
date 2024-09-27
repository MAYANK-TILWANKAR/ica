import mongoose from "mongoose";

const demoDataSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    moblile: String,
    college: String,
    date: String,
    course: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.DemoData ||
  mongoose.model("DemoData", demoDataSchema);
