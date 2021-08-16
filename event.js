const http=require("http");
const fs=require("fs");

const readByChunk=fs.ReadStream("data1.txt");

const server=http.createServer((req,res)=>{
    readByChunk.on("data",(chunk)=>{
        res.write(chunk);
    })
})

server.listen(3000,"127.0.0.1",()=>{
    console.log("server is listening");
})