import mongoose from 'mongoose';
import { DB_URL } from './serverConfig.js';
export default async function connectDB() {
    try{
        await mongoose.connect(
            "mongodb+srv://gaurav94174:gkgydb..@cluster0.fa5tf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
        );
        console.log('MongoDB Connected...');
    }
    catch(err){
        console.log("Something Went Wrong");
        console.error(err);
    }
   
};