import mongoose from "mongoose";
const Schema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        minLength:5
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validate:{
            validator:function(value){
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
            },
            message:"Please enter a valid email address"

        }
        
    },
    password:{
        type:String,
        required:true,
        minLength:8,
        validate:{
            validator:function(value){
                return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(value);
            },
            message:"Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character."
        }
    },
},{timestamps:true});
 const user=mongoose.model("User",Schema);
 export default user;

