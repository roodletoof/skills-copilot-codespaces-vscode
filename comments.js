// Create web server
// Create a web server that listens to incoming requests on port 3000.
// When a request is received, it will respond with the contents of the comments.json file.
// Use the readFile function from the fs module to read the contents of the file.
// Use the createServer function from the http module to create the web server.
// Use the writeHead and end functions on the response object to send the contents of the file to the client.

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    fs.readFile('comments.json', (err, data) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Internal Server Error');
        } else {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(data);
        }
    });
});

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});