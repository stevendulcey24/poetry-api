import mongoose from "mongoose";
const Schema = mongoose.Schema;

let authorSchema = new Schema({
  title: { type: String },
  author: { type: String },
  lines: [{ type: String }]
});

export default mongoose.model("authors", authorSchema);