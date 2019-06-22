const http = require('http');
const path = require('path');
const fs = require('fs');

//create server object
const server = http.createServer((req, res) => {
  /* 
  if (req.url === '/') {
    //second param/arg is the callback function
    //when you read a file you first get the err then the data (err, data)
    fs.readFile(path.join(__dirname, 'public', 'index.html' ), (err, content) => {
      //check for error
      if (err) throw err
      //set status and content type
      res.writeHead(200, { 'Content-Type': 'text/html' })
      //serve html page
      res.end(content)
    })    
  }

  if (req.url === '/about') {
    //second param/arg is the callback function
    //when you read a file you first get the err then the data (err, data)
    fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, content) => {
      //check for error
      if (err) throw err
      //set status and content type
      res.writeHead(200, { 'Content-Type': 'text/html' })
      //serve html page
      res.end(content)
    })
  }

  if (req.url === '/api/users') {
    const users = [
      { name: 'Bob Smith', age: 40 },
      { name: 'Jim Bo', Age: 18 },
      { name: 'Tim Lowe', Age: 21 },
      { type: [1, 2, 3, 4, 5, 6, ['joe', 'jim', 'bo'] ], new: ['one', 'two', 'three']},
      'james',
      'bob'
    ];
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(users))
  }
  */

  //BUILD FILE PATH
  let filePath = path.join(
    __dirname,
    'public',
    req.url === '/' ? 'index.html' : req.url
  );

  //EXTENSION OF FILE
  let extname = path.extname(filePath);

  //INITIAL CONTENT TYPE
  let contentType = 'text/html';

  //CHECK EXT AND SET CONTENT TYPE
  switch(extname) {
    case '.js':
      contentType = 'text/javascript';
      break;
    case '.css':
      contentType = 'text/css';
      break;
    case '.json':
      contentType = 'application/json';
      break;
    case '.png':
      contentType = 'image/png';
      break;
    case '.jpg':
      contentType = 'image/jpg';
      break;
  };

  // Check if contentType is text/html but no .html file extension
  if (contentType == "text/html" && extname == "") filePath += ".html";

  //READ FILE
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if(err.code == 'ENOENT') {
        // PAGE NOT FOUND
        fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) => {
          if (err) throw err
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end(content, 'utf8');
        })
      } else {
        // SOME SERVER ERROR
        res.writeHead(500);
        res.end(`Server Error: ${err.code}`);
      }
    } else {
      // SUCCESS
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf8')
    }

  });

  console.log(filePath)
  console.log(extname)
});

//make the env port or local port
const PORT = process.env.PORT || 5000;

//make the server listen to this PORT
server.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
// server.listen(PORT, function() {console.log(`Server running on port: ${PORT}`)})

