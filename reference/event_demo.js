const EventEmmiter = require('events');

// CREATE CLASS
class MyEmitter extends EventEmmiter { }

// Init class
const myEmitter = new MyEmitter;

// Event listener
myEmitter.on('event', () => console.log('Event Fired'))

// Init event
myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');







