import mongoose from "mongoose";

const membersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  university: {
    type: String,
    required: true,
  },
  joined: {
    type: String,
    required: true,
  },
});

const Members = mongoose.model("Members", membersSchema);
export default Members;
