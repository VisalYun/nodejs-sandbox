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