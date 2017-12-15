var express = require('express');
var router = express.Router();

module.exports={
  getDbConnectionString: function(){
    return 'mongodb://DanielSoares:Hidden11@ds129146.mlab.com:29146/amigo-secreto';
  }
}
