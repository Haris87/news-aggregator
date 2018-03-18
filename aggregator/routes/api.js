var express = require('express');
var NewsItemDB = require('../models/news-item');
var SourceDB = require('../models/source');
var router = express.Router();

router.get('/', index);
router.post('/source', addSource);
router.get('/source', getSources);
router.get('/news', getAllNewsItems);
router.get('/news/search/:term', searchNews);

function index(req, res, next) {
  res.send('Welcome to my api, now get the fuck out.');
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

  SourceDB.find({}, function(err, sources) {
    res.send(sources);
  });
}

function getAllNewsItems(req, res, next) {
  NewsItemDB.find({}, function(err, sources) {
    res.send(sources);
  });
}

function searchNews(req, res, next) {
  var searchTerm = req.params.term || 'awesome';
  NewsItemDB.find({
      $or: [{
        title: new RegExp(searchTerm, 'i')
      }, {
        content: new RegExp(searchTerm, 'i')
      }, {
        author: new RegExp(searchTerm, 'i')
      }]
    },
    function(err, sources) {
      res.send(sources);
    });
}

module.exports = router;
