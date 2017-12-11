'use strict'
const apiRouter = require('express').Router()
const db = require('../db')
const Student = require('../db/models/student');
const Campus = require('../db/models/campus'); 

// If you aren't getting to this object, but rather the index.html (something with a joke) your path is wrong.
	// I know this because we automatically send index.html for all requests that don't make sense in our backend.
	// Ideally you would have something to handle this, so if you have time try that out!
apiRouter.get('/hello', (req, res) => res.send({hello: 'world'}));

apiRouter.get('/campuses', (req, res, next) => {
	  Campus.findAll({})
	  .then(campuses => res.send(campuses))
	  .catch(next);
});


apiRouter.get('/campuses/:campusId/students', (req, res, next) => {
	   Student.findAll({
		    where : {
			     campusId: req.params.campusId
		    }
	   })
	  .then(students => {
	   console.log("hkgjkljşll")
	   	 if(students)
		      res.send(students);
		    else
		      res.status(404).send();
	   })
	   .catch(next);
  });
  
apiRouter.get('/campuses/:parameter', (req, res, next) => {
 const parameter=req.params.parameter;
  if(!isNaN(parseFloat(parameter)) && isFinite(parameter)){
	   Campus.findOne({
		    where : {
			    id: parameter
	   	}
	   })
	   .then(campus => {
	     	if(campus)
		        res.send(campus);
		     else
		       res.status(404).send();
	   })
	   .catch(next);
 }
 else {
  Campus.findOne({
		    where : {
			    name: parameter
	   	}
	   })
	   .then(campus => {
	     	if(campus)
		        res.send(campus);
		     else
		       res.status(404).send();
	   })
	   .catch(next);
 }
 
});



apiRouter.get('/students', (req, res, next) => {
	  Student.findAll({})
	  .then(students => res.send(students))
	  .catch(next);
});

apiRouter.get('/students/:studentId', (req, res, next) => {
	 Student.findOne({
	  	where : {
		   	id: req.params.studentId
		  }
	  })
	  .then(student => {
	     	if(student)
		       res.send(student);
		    else
		      res.status(404).send();
	   })
	   .catch(next);
  });

apiRouter.post("/campuses", (req,res,next) => {
   return Campus.create({
    name:req.body.name,
    imageUrl: req.body.imageUrl,
    description:req.body.description
   })
   .then(createdCampus => {
    res.redirect("/campuses/" + createdCampus.id )
   })
   .catch(next);
 });

apiRouter.post("/students", (req,res,next) => {
   return Student.create({
    firstName:req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    gpa: req.body.gpa,
    campusId : req.body.campusId
   })
   .then(createdStudent => {
    res.redirect("/students" + createdStudent.id )
   })
   .catch(next);
 });
 
 apiRouter.put("/campuses/:id", (req,res,next) => {
   return Campus.update({
   	 name: req.body.name,
   	 imageUrl: req.body.imageUrl,
   	 description:req.body.description
   },{
   	where: {
   		id: req.params.id
   	} 
   })
   .then(updatedCampus => res.send(updatedCampus))
   .catch(next);
 });
 
 apiRouter.put("/students/:id", (req,res,next) => {
   return Student.update({
   	 firstName: req.body.firstName,
     lastName: req.body.lastName,
     email: req.body.email,
     gpa: req.body.gpa,
     campusId: req.body.campusId
   },{
   	where: {
   		id: req.params.id
   	} 
   })
   .then(updatedStudent => res.send(updatedStudent))
   .catch(next);
 });
 
 apiRouter.delete("/campuses/:id", (req,res,next) => {
   return Campus.destroy({
   	where: {
   		id: req.params.id
   	}
   })
   .then(res.send("deleted"))
   .catch(next);
   
 });

apiRouter.delete("/students/:id", (req,res,next) => {
   return Student.destroy({
   	where: {
   		id: req.params.id
   	}
   })
   .then(res.send("deleted"))
   .catch(next);
   
 });





// You can put all routes in this file; HOWEVER, this file should almost be like a table of contents for the routers you create

module.exports = apiRouter;