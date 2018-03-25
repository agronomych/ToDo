/**
 * Created by Agronom on 24.03.2018.
 */
var http = require('http');
var fs = require('fs');
function main(request, response){
    var data;
    if (request.url==='/')
        data = fs.readFile('./pages/main.html',function (error, data) {
            response.end(data)});
    else if (request.url==='/main.css') {
        data = fs.readFile('./pages/main.css', function (error, data) {
            response.setHeader('Content-type','text/css');
            response.end(data)});
    }
    else if (request.url==='/favicon.ico')
        data = fs.readFile('./favicon.ico',function (error, data) {
            response.end(data)});
    else if (request.url==='/ToDo.js')
        data = fs.readFile('./pages/ToDo.js',function (error, data) {
            response.end(data)});
    if (request.url==='/toDoList.txt'){
        data = fs.readFile('./pages/toDoList.txt',function (error, data) {response.end(data);})
    };
}

function startFunction(){
    console.log('Starting server...');
}
var server = http.createServer(main);
var port = process.env.PORT || 3000;
server.listen(port,startFunction());