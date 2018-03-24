/**
 * Created by Agronom on 24.03.2018.
 */
var http = require('http');
function main(request, response){
    response.end('Hello!');
}

function startFunction(){
    console.log('Starting server...');
}
var server = http.createServer(main);
server.listen(3000,'127.0.0.1',startFunction());