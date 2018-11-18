const fs = require('fs');

const input = fs.createReadStream('lorem.txt');
const output = fs.createWriteStream('lorem.md');

input.on('data', part => output.write(part));
// input.on('end', () => console.log(output));
input.on('error', error => console.error(error));
