import { time, timeStamp } from "console";
import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    userId :{
        type: String
    },
    content:{
        type: String,
        require:true
    },
    
},{ timestamps: true })


const posts = mongoose.model("posts", postSchema );

export default posts;