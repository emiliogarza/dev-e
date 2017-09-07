/*
 * I figured I might as well write a basic router and node server
 * 
 */

var http = require('http');
var url = require('url');
var fs = require('fs');

function renderStuff(path, response) {
    fs.readFile(path, null, function(error, data) {
        if (error) {
            response.writeHead(404);
            response.write('Page Not Found');
        } else {
            response.write(data);
        }
        response.end();
    });
}

function handleRequest(request, response) { 
    if (request.url.indexOf('.css') !== -1) {
        response.writeHead(200, {'Content-type' : 'text/css'});
    }
    else if (request.url.indexOf('.js') !== -1) {
        response.writeHead(200, {'Content-type' : 'text/javascript'});
    }    
    else {
        response.writeHead(200, {'Content-Type' : 'text/html'});
    }
    var path = url.parse(request.url).pathname;    
    if (path == '/') {
        renderStuff('./index.html', response); 
    }
    else if (path.indexOf('.') !== -1) {        
        renderStuff('./'+path, response); 
    }
    else {
        renderStuff('./'+path+'.html', response);
    }    
}

http.createServer(handleRequest).listen(8080);