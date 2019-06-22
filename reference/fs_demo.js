//FS MAKE FOLDER, FILES AND WRITE IN THEM
const fs = require('fs');
const path = require('path');

/////////// CREATE FOLDER ///////////////////
//ES6 2nd param is for options so empty object will do. 3rd is callback function, don't need parenthesis for err param es6
/*fs.mkdir(path.join(__dirname, '/test'), {}, err => {
  if(err) throw err
  console.log('folder created')
});

/* fs.mkdir(path.join(__dirname, '/test'), {}, function(err) {
  if(err) throw err;
  console.log('folder created')
}); */

//////////// CREATE AND WRITE TO FILE ///////////////
//fs.writeFile  //fs.appendFile
/*
fs.writeFile(
  path.join(__dirname, '/test', 'hello.txt'),
  'hello World!',
  err => {
    if(err) throw err
    console.log('file written to...')

    // use callback to append more text
    fs.appendFile(
      path.join(__dirname, '/test', 'hello.txt'),
      ' I love node.js',
      err => {
        if(err) throw err
        console.log('file written to...')
      }
    );
  }
);
*/

//this will overwrite the page. If you want to write more to the page use the append method
/* fs.writeFile(
  path.join(__dirname, '/test', 'hello.txt'),
  'I love node.js',
  err => {
    if(err) throw err
    console.log('file written to...')
  }
); */


//////////////// READ FILE /////////////////
//you want 'utf8' which is character encoding, as second paramater  
fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
})

////////////// RENAME FILE ///////////////
fs.rename(path.join(__dirname, '/test', 'hello.txt'), path.join(__dirname, '/test', 'helloworld.txt'), err => {
  if(err) throw err;
  console.log(`file renamed...`)
})