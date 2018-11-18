const stdin = process.stdin;
const stdout = process.stdout;
let user = '';

stdout.write('Привет! Как тебя зовут? ');

stdin.on('data', value => {
    const name = value
        .toString()
        .trim();
    
    user = name;

    const reverseName = name
        .split('')
        .reverse()
        .join('');
    stdout.write(`${name}, твое имя наоборт: ${reverseName}!`);
    process.exit();
});

process.on('exit', () => stdout.write(`\n${user}, Удачи в изучении ноды!`))