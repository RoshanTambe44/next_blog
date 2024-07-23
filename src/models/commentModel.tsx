import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  postid: {
    type: String,
  },
  userid: {
    type: String,
  },
  commentContent: { type: String },
},{timestamps:true});



const comments = mongoose.model("comments", commentSchema);
export default comments;