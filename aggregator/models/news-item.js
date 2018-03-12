// grab the things we need
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

// create a schema
var newsItemSchema = new Schema({
  title: String,
  content: String,
  media: String,
  author: String,
  url: String,
  dateCreated: Date,
  dateAdded: Date,
  type: String,
  source: String
});

var NewsItemDB = mongoose.model('NewsItem', newsItemSchema);

module.exports = NewsItemDB;
