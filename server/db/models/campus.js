'use strict';

var db = require('../index');
var Sequelize = require('sequelize');

const imageUrls = ["https://upload.wikimedia.org/wikipedia/commons/5/56/Thompson_Library_(Vassar_College).jpg",
                    "http://www.ucsb.edu/images/slideshow/ranking-ucen.jpg",
                    "https://upload.wikimedia.org/wikipedia/commons/a/a4/Cary_Quad_and_Spitzer_Court,_Purdue_University.png",
                    "https://wustl.edu/wp-content/uploads/2014/09/danforth-aerial.jpg",
                    "http://haberler.boun.edu.tr/assets/uploads/5833f382ef4713.JPG",
                    "http://www.bio.boun.edu.tr/sites/default/files/sitelogos/boun_campus.jpg"];

 function getRandomImage(){
     return imageUrls[Math.floor(Math.random() * imageUrls.length)];
 };

var Campus=db.define("campus",{
    
    name: {
		type: Sequelize.STRING, allowNull:false, notEmpty: true
	},
	
	imageUrl: {
	    type: Sequelize.STRING,
	    defaultValue: function () {
          return getRandomImage();
       }
	},
	description:{
	    type: Sequelize.TEXT('long')
	}
	
});

module.exports=Campus;