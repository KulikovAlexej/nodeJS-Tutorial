const waitTimeout = 3000;
const waitInterval = 100;
let currentTime = 0;
let percent = 0;

print(0);

function print(percent) {
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`Loading... ${percent.toFixed(1).toString()}%`);
}

setInterval(() => {
    currentTime += waitInterval;
    percent = currentTime * 100 / waitTimeout;
    print(percent);
    // process.stdout.write(percent.toFixed(1).toString() + '%');
}, waitInterval);

setTimeout(() => {
    print(100);
    process.stdout.write('\nLoad was finished!');
    process.exit()
}, waitTimeout)