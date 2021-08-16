const http=require('http');
const fs= require('fs');

let Data=fs.readFileSync("data.json","utf-8");
let data=[];
const server=http.createServer((req,res)=>{

    
    let pathName=req.url;
    if(pathName==="/name"){
        res.end("Hi iam shashank and im the owner of the server");
    }
    else if(pathName==="/address"){
 res.end("Bangalore");

    }
    else if(pathName==="/home"){
        fs.readFile("index.html","utf-8",(err,data)=>{
            res.end(data);
        });
}
else if(pathName==="/cricket-124"){
   
    req.on("data",(chunk)=>{
        data.push(chunk);
    });
    req.on("end",()=>{
        
        let data1=JSON.stringify(data);
        let d1=JSON.parse(data);
        const d2=JSON.stringify(data);
        console.log(d2);
        fs.writeFile("data.json",d1,(err)=>{
            console.log(err);
        })
        res.end('successfully posted');
    })

   
}
else{
    res.end("page not found");
}
  
});

server.listen(4000,'127.0.0.1',()=>{
    console.log("server is listening");
});
