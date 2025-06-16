let http = require('http');
let fs = require('fs');

let server = http.createServer((req,resp)=>{
    let url = req.url;
     
    if(url == '/'){
        resp.write('<html>')
        resp.write('<head> <title>Node js Routing</title> </head>')
        resp.write('<body> <h1>Welcome to node js app </h1>')
        resp.write('<form action="/message" method="POST">')
        resp.write('<input type="text" placeholder="Enter a random text" name="random"/>')
        resp.write('<button type="submit">add</button>')
        resp.write('</form> </body> </html>')
        return resp.end();
    }
    else if(url == '/message'){
        resp.write('<html>')
        resp.write('<head> <title>Result</title> </head>')
        resp.write('<body> <h1>Thank you for using our app </h1> ')
        resp.write(' </body> </html>')
        let body =[]
        req.on('data',(chunck)=>{
            body.push(chunck)
        })
        
        req.on('end',()=>{
            let data = Buffer.concat(body).toString();
            let msg = data.split("=")[1]
            fs.writeFileSync('message.txt', msg)
        })
        return resp.end();
    }
})

server.listen(3002,()=>{
    console.log('server is running on port 3002');
    console.log('http://localhost:3002')
})