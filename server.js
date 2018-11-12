var http = require('http');
var express = require('express');
var app = express();
var server = http.Server(app);

app.get('/', function(request, response){
    response.sendFile(__dirname+'/index.html');
    

    
});




app.get('/about', function(request, response){
    response.sendFile(__dirname+'/about.html');
    

    
});


 server.listen(process.env.PORT, process.env.IP, function(){
    console.log('Server running');
  });