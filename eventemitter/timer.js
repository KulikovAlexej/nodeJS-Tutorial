// const EventEmitter = require('events');
const EventEmitter = require('./event-emitter');

class Timer extends EventEmitter {
    constructor(total) {
        super();
        this.total = total;
        this.ticks = 0;
    }

    start() {
        this.interval = setInterval(() => {
            this.tick()
        }, 1000);
        this.emit('start');
        this.property = 'property in method start';  
    }

    tick() {
        this.ticks++;
        if (this.ticks <= this.total) {
            // console.log(this.property);
            this.emit('tick', this.ticks);
            this.property = 'property in method tick'
        } else {
            this.end()
        }
    }

    end() {
        clearInterval(this.interval);
        this.emit('end');
    }
}


const timer = new Timer(10);
timer.on('start', () => console.log('start'));
timer.on('tick', (tick) => console.log(tick));
timer.on('end', () => console.log('end'));
timer.start();
