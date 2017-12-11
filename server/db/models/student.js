'use strict';

var db = require('../index');
var Sequelize = require('sequelize');

var Student=db.define('student', {
    
	firstName: {
		type: Sequelize.STRING, allowNull:false, notEmpty: true
	},
	
	lastName: {
		type: Sequelize.STRING, allowNull:false, notEmpty: true
	},
	
	email : {
		type: Sequelize.STRING, allowNull: false, notEmpty: true,
		validate : {
		  isEmail: true
		}
	},
	
	gpa : {
		type: Sequelize.DECIMAL,
		validate : {
		  min: 0.0,
		  max: 4.0
		}
	}
},
{
	getterMethods :{
     	name: function(){
		   return this.getDataValue("firstName") + " " + this.getDataValue("lastName");
	   }
	}	
})

module.exports=Student;