const http = require('http');

//CREATE SERVER OBJECT

/*
//not in es6
http.createServer(function(req, res) {
  res.write('im not es6')
  res.end()
})
.listen(5001, function() {console.log('I am the old server not es6')})
*/

//in es6
http.createServer((req, res) => {
  //write response
  res.write('hello world111');
  res.write(' sfsdfjsdfb')
  res.end()
})
.listen(5002, () => console.log('Server running...'))