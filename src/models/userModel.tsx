import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username : {
        type: String,
        unique:true
    },

    email : {
        type: String,
        unique: true
    },

    password : {
        type : String,
        trim: true
    }
})


 const user = mongoose.models.users || mongoose.model("users", userSchema);


 export default user;
