reference: https://www.youtube.com/watch?v=zb3Qk8SG5Ms&list=PL4cUxeGkcC9jsz4LDYc6kv3ymONOKxwBU

# Nodejs Sandbox
### Installation
open cmd and write *'node -v'* to check whether your machine have nodejs install or not. If no, download and install node js here https://nodejs.org/en/
### Running node program
go to your project directory and write *node {ur_js_fileName}* in the cmd
### Creating server and listen for a request
```
const http = require('http');

// Create a server
const server = http.createServer((req, res) => {
    console.log("Request is made!");
});

//listen for request
server.listen(3000, 'localhost', ()=>{
    console.log("Server is created!");
});
```
### Return back a response
```
const http = require('http');

const server = http.createServer((req, res) => {
    console.log("Request is made!");

    res.setHeader('Content-Type', 'text/html');

    res.write("<head><title>Nodejs Sandbox</title></head>")
    res.write("<h1>Hello, World!</h1>");
    res.write("<p>Hello again, world!</p>");
});

server.listen(3000, 'localhost', ()=>{
    console.log("Server is created!");
});
```
### Basic Routing
```
res.setHeader('Content-Type', 'text/html');

let path = './views/';
switch(req.url){
    case '/':
        path += 'index.html';
        res.statusCode = 200;
        break;
    case '/about':
        path += 'about.html';
        res.statusCode = 200;
        break;
    default:
        path += '404.html';
        res.statusCode = 404;
        break;
}

fs.readFile(path, (err, data)=>{
    if(err){
        console.log(err);
        res.end();
    }
    else{
        res.end(data);
    }
})
```