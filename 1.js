// const uniq = require('uniq');
// const arr = [1,2,3,4,5,6,0,3,4,5,];
// console.log(uniq(arr));

const http = require('http');
const server = http.createServer((resquest,response)=>{

response.end('hahaha');
})
server.listen(8080,()=>{
console.log('server is running 端口监听中......');
})