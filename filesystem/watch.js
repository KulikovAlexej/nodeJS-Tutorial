const fs = require('fs');

const watcher = fs.watch(__dirname, (event, filename) => {
    console.log(event, filename);
});

watcher.on('error', (error) => console.error(error));