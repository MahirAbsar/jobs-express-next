import mongoose from "mongoose";

const JobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please provide a job title"],
    trim: true,
    maxlength: [30, "title cannot be more than 30 characters"],
  },
  applied: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.model("Job", JobSchema);
