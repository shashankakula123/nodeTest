const express=require('express');
const fs=require('fs');
let data=JSON.parse(fs.readFileSync("data.json","utf-8"));
const app=express();
app.use(express.json())

app.get("/",(req,res)=>{
    res.status(205).json({name:'himanshu',add:'bengaluru'});
});



app.post("/players",(req,res)=>{
    data.push(req.body);
     data=JSON.stringify(data);
    fs.writeFile("data.json",data,()=>{
        
        res.end("done");

    });
  
})
app.listen(4000,()=>{
    console.log("server is listening");
});