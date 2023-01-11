
const Joi = require('joi');
const express = require('express');
const app = express();
app.use(express.json()); 



const courses = [
		{id:1, name : 'course 1'},
		{id:2, name : 'course 2'},
		{id:3, name : 'course 3'}
	];

app.get('/',function(req, res){
	res.send('Hello World!!')
});

app.get('/api/courses/:id',function(req, res){

	if(req.params.id == "all"){
		res.send('all requested')
	}
	const course = courses.find(c => c.id === parseInt(req.params.id));
	if(!course) res.status(404).send("course not found");
	res.send(course);
});

/*app.get('/api/posts/:year/:month',function(req, res){
	res.send(req.params);
	res.send(req.query); // get query params from URL after question mark ( ? )
});
*/

// POST
// Add a new course
app.post('/api/courses', function(req, res){

/*	const schema = Joi.object({ 
		name: Joi.string() .min(3) .required()
	});

	const result = schema.validate(req.body);*/

	const result = validateCourse(req.body);
	if(result.error){
		res.status(400).send(result.error.details[0].message);
		return;
	}

	const course = {
		id: courses.length + 1,
		name : req.body.name
	};
	courses.push(course);
	res.send(course);
});

// PUT
app.put('/api/courses/:id',function(req, res){

	const course = courses.find(c => c.id === parseInt(req.params.id));
	if(!course) res.status(404).send("course nout found");

	const result = validateCourse(req.body);
/*	const schema = Joi.object({ 
		name: Joi.string().min(3).required()
	});

	const result = schema.validate(req.body);*/
	if(result.error){
		res.status(400).send(result.error.details[0].message);
		return;
	}

	// Update course
	course.name = req.body.name;
	res.send(course);	

});

function validateCourse(course){

	const schema = Joi.object({ 
		name: Joi.string().min(3).required()
	});

	const result = schema.validate(course);
	return result;
}

// Check to see if there is an environment variable named "PORT"
// Yes, use the value derived
// No, use 3000
const port = process.env.PORT || 3000;
app.listen(port, function(){
	console.log(`Listening on port ${port}`);
});
