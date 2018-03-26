/**
 * Created by Agronom on 24.03.2018.
 */
var http = require('http');
var fs = require('fs');

function saveData(data){
    console.log('Saving data...');
    fs.writeFile("./pages/toDoList.txt",data,function (error) {
        if (error) throw error;
    });
}

function loadData(){
    console.log('Loading data...');
    data = fs.readFile("./pages/toDoList.txt",function (error) {
        if (error) throw error;
    });
    return data;
}

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
    else if (request.url==='/ToDo.js'){
        data = fs.readFile('./pages/ToDo.js',function (error, data) {
            response.end(data)});
    }
    else if (request.url==='/toDoList.txt'){
        console.log('Sending list');
        data = fs.readFile('./pages/toDoList.txt',function (error, data) {
            if (error) {fs.readFile('./pages/toDoList_Default.txt', function (error,data){
                saveData(data);
                response.end(data);
            })} else
            response.end(data);})
    } else if (request.url==='/saveData'){
        request.on('data',saveData);
        response.end();
    }
}

function startFunction(){
    console.log('Starting server...');
}
var server = http.createServer(main);
var port = process.env.PORT || 3000;
server.listen(port,startFunction());