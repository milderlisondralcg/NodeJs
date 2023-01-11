
const express = require('express');
const app = express();

app.get('/', (req, res) => {
	res.send('Hello Sir')
});

app.get('/api/courses', (req, res) => {
	res.send(['1,2,3']);
});

app.get('/api/courses/:id', (req, res) => {
	//req.params.id;
	res.send(req.params.id);
});

app.get('/api/posts/:year/:month', (req, res) => {
	//req.params.id;
	res.send(req.params);
});

// Read port from the environment
const port = process.env.PORT || 3000
app.listen(port,() => console.log(`Listening on port ${port}`))