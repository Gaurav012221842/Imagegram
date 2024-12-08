import express, { urlencoded } from 'express';
import connectDB from './config/dbConfig.js';   
import apiRouter from './router/apiRouter.js'
const PORT=8004;
const app=express();
app.use(express.text());
app.use(express.json());
 
app.use(urlencoded());
app.use('/api', apiRouter);
app.get('/ping',(req,res)=>{
    console.log(req.query);
    console.log(req.body);
    return res.json({message: 'Pong'+"Home Style"});
}); 

app.listen(PORT,()=>{
    console.log(`Server listening on ${PORT}`);
    connectDB();  // Connect to MongoDB
});    