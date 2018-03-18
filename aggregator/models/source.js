// grab the things we need
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

// create a schema
var sourceSchema = new Schema({
  name: String,
  abbr: String,
  type: String,
  twitter: String,
  medium: String,
  reddit: String,
  rss: String
});

sourceSchema.index({ name: 1}, { unique: true });

var SourceDB = mongoose.model('Source', sourceSchema);

module.exports = SourceDB;
