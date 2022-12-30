import mongoose from "mongoose";
const Schema = mongoose.Schema;

let authors = new Schema({
  title: { type: String },
  author: { type: String }
  
});

export default mongoose.model("authors", authors);