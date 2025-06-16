let http = require('http')

let server = http.createServer((req,resp)=>{
    console.log("server is running successfully");
    
})
server.listen(3000)