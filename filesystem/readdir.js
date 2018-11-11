const fs = require('fs');


fs.readdir(__dirname, (error, content) => {
    if(error) throw error;
    console.log(content)
});

// console.log(contents)