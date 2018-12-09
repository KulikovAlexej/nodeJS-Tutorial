const http = require('http');
const fs = require('fs');
const path = require('path');

function parseBody(body) {
    // username=aleksey.kulikov.96%40gmail.com&password=12345678
    let result = {};
    let pairs = body.split('&');
    pairs.forEach(pair => {
        const [key, value] = pair.split('=');
        console.log(key, value)
        result[key] = value
    })
    return result;
}

const server = http.createServer((req, res) => {
    switch (req.method) {
        case "GET":
            console.log('GET');
            const stream = fs.createReadStream(path.join(__dirname, 'public', 'form.html'));
            res.writeHead(200, { 'Content-Type': 'text/html' })
            stream.pipe(res);
            // res.end('GET')
            break;
        case 'POST':
            // console.log(req);
            let body = '';
            req.setEncoding('utf-8');
            req.on('data', (data) => body += data);
            req.on('end', () => {
                let parsedBody = parseBody(body);

                res.end(JSON.stringify(parsedBody));
                // parseBody(body);
            });
            req.on('error', () => res.writeHead(500))
            res.writeHead(200, { 'Content-Type': 'text/plain' })
            

            break;
        default:
            console.log('default')
            res.end('default')
            break;
    }
}).listen(8000, () => console.log('app is ran'))