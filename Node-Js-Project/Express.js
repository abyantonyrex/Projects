let http = require('http');
let express = require('express');
let bodyParser = require('body-parser');
let app = express();
app.use(bodyParser.urlencoded())


app.set('view engine', 'ejs');
app.set('views', 'pages');


let shopExport = require('./routers/Shop')
let adminExport = require('./routers/Admin')
let errorExport = require('./routers/ErrorPage')

let path = require('path')
let global = require('./util/pathdef')
app.use(express.static(path.join(global , '/public')))
let server = http.createServer(app);


app.use(shopExport)
app.use(adminExport)
app.use(errorExport)


server.listen(3000,()=>{
    console.log("Server is running on port 3000");
    console.log('http://localhost:3000')
})

// app.set('view engine' , 'pug')

// let handlebars = require('express-handlebars');
// app.engine('hbs', handlebars.engine({ extname: 'hbs' }));
// app.set('view engine', 'hbs');


// next function example
// app.use((req,resp,next)=>{
//     console.log("Middleware 1");
//     next();
// })
// app.use((req,resp,next)=>{
//     console.log("Middleware 2");
//     next();
// })
// app.use((req,resp,next)=>{
//     console.log("Middleware 3");
//     resp.end()
// })


// app.use("/mul", (req, resp) => {
//     resp.send(`
//         <h1>This is an example of multiple lines</h1>
//         <h3>
//         <ul>
//         <li>one</li>
//         <li>two</li>
//         <li>three</li>
//         </ul>
//         </h3>
//         `);
//     });

// app.use("/one",(req,resp,next)=>{ // root route or / should be always at the bottom
//     resp.send('<h1>one line only example</h1>') // only one resp is allowed
   
// })


// server.listen(3001)
