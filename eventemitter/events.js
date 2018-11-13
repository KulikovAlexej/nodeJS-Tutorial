const EventEmitter = require('events');

const emitter = new EventEmitter();

emitter.on('start', (data) => console.log('start ' + data));

emitter.once('startOnce', (data) => console.log('startOnce ' + data));

emitter.emit('startOnce', 1);
emitter.emit('startOnce', 12);
emitter.emit('start', 123);
emitter.removeAllListeners();

emitter.emit('start', 123);
emitter.emit('start', 123);
emitter.emit('start', 123);
emitter.emit('start', 123);