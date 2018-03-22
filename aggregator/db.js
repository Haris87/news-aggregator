var mongoose = require('mongoose');
require('dotenv').config();

var db = {
  connect: connect
}

var connectionURL = process.env.CONNECTION_URL;

function connect() {
  console.log('db connecting...');
  mongoose.connect(connectionURL, {
    config: {
      autoIndex: true
    }
  }).then(function(){
    console.log('db connected.');
  });
}

module.exports = db;
