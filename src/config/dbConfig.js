import mongoose from 'mongoose';
import { DB_URL } from './serverConfig.js';
export default async function connectDB() {
    try{
        await mongoose.connect("mongodb+srv://gaurav94174:puGf3Q03c68BlwNz@cluster0.zdf5a.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
        );
        console.log('MongoDB Connected...');
    }
    catch(err){
        console.log("Something Went Wrong");
        console.error(err);
    }
    
};