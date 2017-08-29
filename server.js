/*
 * I figured, I might as well write a basic router and node server
 * 
 */

var http = require('http');
var url = require('url');
var fs = require('fs');

function renderHTML(path, response) {
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
        var cssFile = fs.readFileSync('./'+request.url, {encoding: 'utf8'});
        response.write(cssFile);
        response.end();
    }
    else if (request.url.indexOf('.js') !== -1) {
        response.writeHead(200, {'Content-type' : 'text/javascript'});
        var jsFile = fs.readFileSync('./'+request.url, {encoding: 'utf8'});
        response.write(jsFile);
        response.end();
    }    
    else {
        response.writeHead(200, {'Content-Type' : 'text/html'});
        var path = url.parse(request.url).pathname;
        if (path == '/') {
            renderHTML('./index.html', response); 
        }
        else {
            renderHTML('./'+path+'.html', response); 
        }    
    }
}

http.createServer(handleRequest).listen(8080);
