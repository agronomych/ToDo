/**
 * Created by Agronom on 24.03.2018.
 */
var http = require('http');
var fs = require('fs');
function main(request, response){
    var data;
    console.log('Main function. Trying to response.')
    if (request.url==='/main.css')
        data = fs.readFile('./pages/main.css',function (error, data) {
            response.end(data)})
    else if (request.url==='/')
        data = fs.readFile('./pages/main.html',function (error, data) {
            response.end(data)});
    else if (request.url==='/favicon.ico')
        data = fs.readFile('./favicon.ico',function (error, data) {
            response.end(data)});
}

function startFunction(){
    console.log('Starting server...');
    console.log('Started');
}
var server = http.createServer(main);
var port = process.env.PORT || 3000;
console.log(port);
console.log('Env.port='+process.env.PORT);
server.listen(port,'localhost',startFunction());