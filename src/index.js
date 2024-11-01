import express from 'express';
import connectDB from './config/dbConfig.js';
const PORT=8004;
const app=express();
app.get('/ping/:name',(req,res)=>{
//    return res.json({message: "w her YOu"});
    return res.send(`Hello, ${req.params.name}!`);
});

app.get('/home',(req,res)=>{
    return res.json({message: 'Pong'+"Home Style"});
});
// app.post('/home',(req,res)=>{
//     return res.send("Post: Home Style");
// });
// app.put('/home',(req,res)=>{
//     return res.send("Put: Home Style");
// });
// app.delete('/home',(req,res)=>{
//     return res.send("Delete: Home Style");
// });
app.listen(PORT,()=>{
    console.log(`Server listening on ${PORT}`);
    connectDB();  // Connect to MongoDB
});