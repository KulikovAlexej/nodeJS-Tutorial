const fs = require('fs');

function getValue(flag) {
    const index = process.argv.indexOf(flag)
    if (index !== -1) {
        return process.argv[index + 1]
    }
    return null
}

const fileName = getValue('-f');
if (fileName) {
    fs.readFile(fileName, 'utf-8', (error, data) => {
        if (error) return console.log('Такого файла нет');
        console.log(data)
    })
}

