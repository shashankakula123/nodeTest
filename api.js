const fs=require("fs");
const http=require("http");
let a=fs.readFileSync("data.json","utf-8");

let Data=JSON.parse(a);

let data=[];
const server=http.createServer((req,res)=>{
    pathName=req.url;
    if(pathName==="/home"){
        res.end("Hii there i am shashank,im the owner of the server");

    }
    else if(pathName==="/movies"){
        res.end("This is a movies website");

    }
    else if(pathName==="/cricket"){
        res.end(data);
    }

    else if(pathName==="/update"){
req.on("data",(chunk)=>{
    data.push(chunk);
})
req.on("end",()=>{
 data=JSON.parse(data);
 let data1=JSON.stringify(data)
 Data.push(JSON.parse(data1));
    const d=JSON.stringify(Data);

    fs.writeFile("data.json",d,(err)=>{
console.log(err);
    })
    res.end("successfully posted");
})
    }
    else{
        res.end("Page not found");
    }
})


server.listen(3000,"127.0.0.1",()=>{
    console.log("listening");
})
