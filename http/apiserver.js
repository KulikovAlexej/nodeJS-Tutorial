const http = require('http');
const users = require('./data/users.json');

http.createServer((req, res) => {
    if (req.url === '/users') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(users))
    } else if (req.url === '/users/activated') {
        const activated = users.filter(user => user.activated);
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(activated))
    } else if (req.url === '/users/not-activated') {
        const notActivated = users.filter(user => !user.activated);
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(notActivated))
    } else if (req.url.match(/\/users\/\d+$/)) {
        const id = parseInt(req.url.replace(/\D+/, ''));
        const user = users.find(user => user.id === id);
        if (user) {
            res.writeHead(200, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify(user))
        } else {
            res.writeHead(404, { 'Content-Type': 'text/plain; charset=UTF-8' })
            res.end('Такого юзера нет')
        }

    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain; charset=UTF-8' })
        res.end('Not found')
    }


}).listen(3000, () => console.log('listening'));