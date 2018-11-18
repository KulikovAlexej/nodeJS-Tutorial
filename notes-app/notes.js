const fs = require('fs');

const action = process.argv[2];
const title = process.argv[3];
const description = process.argv[4];

switch (action) {
    case 'create':
        create((error, note) => {
            if (error) return console.log(error)
            console.log(`Заметка о ${note.title} была создана!`)
        });
        break;
    case 'remove':
        remove((error, note) => {
            if (error) return console.log(error)
            console.log(`Заметка о ${note.title} была удалена!`)
        });
        break;
    case 'view':
        console.log('view note');
        view(title, (error, note) => {
            if (error) return console.log(error.message);

            if (note) return console.log(`#${note.title}\n----\n${note.description}`);

            return console.log('такой заметки не существует')

        })
        break;
    case 'list':
        list((error, notes) => {
            if (error) return console.log('Такого файла нет');

            notes.forEach((element, index) => {
                console.log(`${index + 1}. ${element.title}`)
            });
        });
        break;
    default:
        console.log('Такая команда остутствует');
        process.exit();
}

function create(done) {
    if (title && description) {

        let note = {
            title,
            description
        };
        fs.readFile('notes.json', 'utf-8', (error, notes) => {
            if (error) return done(error);

            notes = JSON.parse(notes);
            notes.push({ title, description });
            notes = JSON.stringify(notes);


            fs.writeFile('notes.json', notes, (error) => {
                if (error) throw error;
                done(null, note);
            })

        })
    }
}

function remove(done) {
    if (title) {

        fs.readFile('notes.json', 'utf-8', (error, notes) => {
            if (error) return done(error);

            notes = JSON.parse(notes);
            notes = notes.filter(note => note.title !== title);

            if(!notes) return done(new Error('Таких заметок нет'))
            notes = JSON.stringify(notes);


            fs.writeFile('notes.json', notes, (error) => {
                if (error) throw error;
                done();
            })

        })
    }
}

function list(done) {
    fs.readFile('notes.json', 'utf-8', (error, notes) => {
        if (error) return done(error);

        notes = JSON.parse(notes);
        done(null, notes);
    })
}

function view(title, done) {
    fs.readFile('notes.json', 'utf-8', (error, notes) => {
        if (error) return done(error);

        notes = JSON.parse(notes);
        const note = notes.find(note => note.title === title)
        done(null, note);
    })
}