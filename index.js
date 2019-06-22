const http = require('http');
const path = require('path');
const fs = require('fs');

//create server object
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.write('<h1>HOME</h1>')
    res.end('<p>I am the homepage</p>')
  } else if (req.url === '/about') {
    res.write('<h1>ABOUT</h1>')
    res.end('<p>I am the about page</p>')
  }
})

//make the env port or local port
const PORT = process.env.PORT || 5000;

//make the server listen to this PORT
// server.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
server.listen(PORT, function() {console.log(`Server running on port: ${PORT}`)})

