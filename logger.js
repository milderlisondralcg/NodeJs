const EventEmitter = require('events');

//console.log(__filename);
//console.log(__dirname);

// local scope only
var url = 'http://www.yahoo.com';

class Logger extends EventEmitter{

	log(message){
		// Send HTTP request
		console.log(message);

		// Raise an event
		this.emit('messageLogged',{id:1,url:'http://mysite.org'});

	}
}


// Export method allows other JS files to use it
//module.exports.log = log; // module.exports.ABCD - ABCD is the name that other JS files will see
// module.exports.url = url; // exports the member "url"
// module.exports = log; // exports a single function; the JS including this module would use it this way...
// log('message here');

module.exports = Logger;