const EventEmitter = require('events');
const uuid = require('uuid');

// console.log(uuid.v4()); //generates random id

class Logger extends EventEmitter {
  log(msg) {
    //call event
    this.emit('message', { id: uuid.v4(), msg });
    this.emit('testFunc', msg)
  }
}

module.exports = Logger




















