var http = require ("http");

http.createServer(function(req,res){
    res.write('\n Hello, it^s my first server ');
    
    if(req.url === '/contact') {
        res.write('Maybe, it isn^t my server');
        res.end();
    }

    if(req.url === '/about') {
        res.write('This is exactly my server');
        res.end();
    }

}).listen(3000,function() {
    console.log("Server http://localhost:3000");
  });