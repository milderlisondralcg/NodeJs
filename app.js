
const http = require('http');

const server = http.createServer(function(req,res){
	if(req.url === '/'){
		res.write('Hello World');
		res.end();
	}

	if(req.url === '/api/courses'){
		res.write(JSON.stringify([1,2,3,4]));
		res.end();
	}
});
server. listen(3000);

console.log('Listening on port 3000');
/*
const Logger = require('./logger');
const logger = new Logger();

// Register a listener
logger.on('messageLogged',function(arg){
	console.log('Listener called', arg);
})

logger.log('message');

const fs = require('fs');
const files = fs.readdirSync('./'); // Reads all the contents of the directory this file is in
console.log(files);

// Asynchronous way to read a directory
fs.readdir('../', function(err,files){
	if(err) console.log('Error', err);
	else console.log('Result', files);
});

const os = require('os');
var totalMemory = os.totalmem();
var freeMemory = os.freemem();
console.log('Total Memory: ' + totalMemory);
console.log(`Total Memory: ${totalMemory}`); // as of ECMA 6
console.log('Free Memory: ' + freeMemory);

const path = require('path');
var pathObj = path.parse(__filename);

console.log('Path Object: ');
console.log(pathObj);


console.log(logger);

logger.log("Hello from the app.js file");*/
/*function sayHello(name){
	console.log("hello " + name);
}

sayHello("Milder Lisondra");*/