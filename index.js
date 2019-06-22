const Logger = require('./logger');

const logger = new Logger();

let test

logger.on('message', (data) => {
  console.log(`Called listener: ${data.id}: ${data.msg}`); 
  console.log('test ', data)
  test = data
  return data
})

logger.on('testFunc', (data) => {
  console.log(data)
})

logger.log('Hello World')
// logger.log('Hello World222222')

// console.log(test)