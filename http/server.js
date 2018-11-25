const http = require('http');
const server = http.createServer();

const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel='stylesheet' href='app.css'>
</head>
<body>
    <h1>Hello world</h1>
    <h3>It is Node.js</h3>
    <script src='app.js'>
</body>
</html>
`;

const css = `
h1 {
    background: lightgreen;
    text-align: center;
}
h3 {
    text-align: center;
}
`
const js = `const h3 = document.querySelector('h3');
console.log(12345);
h3.addEventListener('click', e => {
    alert('Open alert);
});`
server.on('request', (req, res) => {
    console.log(req.url);


    if(req.url === '/') {
        res.writeHead(200, {
            'Content-Type': 'text/html'
        })
        res.end(html);
    }

    if(req.url === '/app.css') {
        res.writeHead(200, {
            'Content-Type': 'text/css'
        })
        res.end(css);
    }

    if(req.url === '/app.js') {
        res.writeHead(200, {
            'Content-Type': 'text/javascript'
        })
        res.end(js);
    }

    else {
        res.writeHead(200, {
            'Content-Type': 'text/plain'
        })
        res.end('404 Not Found@!');
    }


});

server.listen(3000, () => console.log('Сервер был запущен'))