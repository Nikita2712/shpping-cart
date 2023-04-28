const express=require("express")
const app=express()
// app.use(express());
const port=6000;
const mongoB=require('./db');
const router = require("./Route/CreateUser");

// middleware hota universal fact
// app.use((req,res,next)=>{
//     res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
//     res.header(
//         "Access-Control-Allow-Header",
//         "Origin, X-Requested-With, Control-Type, Accept"
//         )
//         next();
//     })

mongoB();
app.use(express.json());

app.get('/',(req,res)=>{
    res.send("hello world");
})
app.use(require("./Route/CreateUser"));



 app.listen(port,()=>{ 
    console.log(`example app alistening on port ${port}`)
 })