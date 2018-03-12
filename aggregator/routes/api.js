var express = require('express');
var NewsItemDB = require('../models/news-item');
// var NewsItem = require('../news-item');
var SourceDB = require('../models/source');
// var Source = require('../source');
var router = express.Router();

router.get('/', index);
router.post('/source', addSource);
router.get('/source', getSources);

function index(req, res, next) {
  res.send('api works');
}

function addSource(req, res, next) {

  var source = new SourceDB({
    name: req.body.name,
    abbr: req.body.abbr,
    type: req.body.type,
    twitter: req.body.twitter,
    medium: req.body.medium,
    reddit: req.body.reddit,
    rss: req.body.rss
  });

  source.save(function(err, response) {
    if (err) {
      return res.json(err);
    }

    return res.json(response);
  });
}

function getSources(req, res, next) {
  // res.send('api works: source');
  // return;
  SourceDB.find({}, function(err, sources) {
    res.send(sources);
  });
}

module.exports = router;
