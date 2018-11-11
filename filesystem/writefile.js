const fs = require('fs');
// for(let i = 0; i < 10; i++) {
//     fs.appendFile('note.txt', `# ${i}. New string in note.txt!\n`, error => {
//         if(error) throw error;
//         fs.readFile('note.txt', 'utf-8', (error, data) => {
//             if (error) return console.log('Такого файла нет');
//         })
//     })
// }

function getValue(flag) {
    const index = process.argv.indexOf(flag)
    if (index !== -1) {
        return process.argv[index + 1]
    }
    return null
}
const fileName = getValue('-f');
const content = getValue('-c');

if(fileName && content) {
    fs.appendFile(fileName, `${content}\n`, error => {
        if(error) throw error;
        fs.readFile('note.txt', 'utf-8', (error, data) => {
            if (error) return console.log('Такого файла нет');
        })
    }) 
}


