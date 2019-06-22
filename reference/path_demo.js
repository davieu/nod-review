//GIVES INFORMATION ABOUT THE FILE YOU ARE ON
const path = require('path')

/////////// BASE FILE NAME //////////////
console.log(__filename); //C:\Users\davis\code\node-practice\reference\path_demo.js
console.log(path.basename(__filename)); //path_demo.js

////////////// DIRECTORY NAME ///////////////
console.log(path.dirname(__filename)); //C:\Users\davis\code\node-practice\reference
console.log(__dirname); //C:\Users\davis\code\node-practice\reference

////////// FILE EXTENSION /////////////////
console.log(path.extname(__filename)) // .js

///////////// CREATE PATH OBJECT ///////////////
console.log(path.parse(__filename)) 
//gives parsed object of path
/* {
  root: 'C:\\',
  dir: 'C:\\Users\\davis\\code\\node-practice\\reference',
  base: 'path_demo.js',
  ext: '.js',
  name: 'path_demo'
} */
console.log(path.parse(__filename).base) //path_demo.js

/////////////// CONCATENATE PATHS //////////////////
// ../test/hello.html
console.log(path.join(__dirname, 'test', 'hello.html'))
                   //__dirname               'test' 'hello.html
// C:\Users\davis\code\node-practice\reference\test\hello.html