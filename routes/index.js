var crypto = require('crypto');
var Catalog = require('../models/catalog.js');
module.exports = function(app) {
  app.get('/',function(req,res){
    res.render('index');
  });
  app.get('/api/catalog/',function(req,res){
  	var callback = function(error, data){
      if(!error){
  			res.json(data);
  		}
  	};
    Catalog.get(null,callback);
  });
 
};