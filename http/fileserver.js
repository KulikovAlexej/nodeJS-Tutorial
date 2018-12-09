const http = require('http');
const fs = require('fs');
const path = require('path');
const server = http.createServer();

server.listen(3000, () => console.log('listening'));

server.on('request', (req, res) => {
    if (req.url === '/') {
        const stream = fs.createReadStream(path.join(__dirname, 'public', 'index.html'));
        let buffer = '';
        res.writeHead(200, {'Content-Type': 'text/html'});
        stream.on('data', (data) => buffer += data);
        stream.on('end', () => res.end(buffer))
    } else if (req.url.match(/.css$/)) {
        const cssFile = path.join(__dirname, 'public', req.url);
        const stream = fs.createReadStream(cssFile);
        let buffer = '';
        res.writeHead(200, {'Content-Type': 'text/css'});
        stream.on('data', (data) => buffer += data);
        stream.on('end', () => res.end(buffer))
    } else if (req.url.match(/.png$/)) {
        
        const pngFile = path.join(__dirname, 'public', req.url);
        const stream = fs.createReadStream(pngFile);
        res.writeHead(200, {'Content-Type': 'image/png'});
        stream.pipe(res)
    } else if (req.url.match(/.js$/)) {
        const jsFile = path.join(__dirname, 'public', req.url);
        const stream = fs.createReadStream(jsFile);
        res.writeHead(200, {'Content-Type': 'application/javascript'});
        stream.pipe(res)
    }
})


