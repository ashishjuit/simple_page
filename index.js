var express = require ('express');
var server = express();


server.get('/', function(request , response){
  response.send('Hello, I am finally here!');
});

server.listen(8080);
