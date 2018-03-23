var express = require('express');
var NewsItemDB = require('../models/news-item');
var SourceDB = require('../models/source');
var router = express.Router();

var pageSize = 20;

router.get('/', index);
router.post('/source', addSource);
router.get('/source', getSources);
router.get('/news/:term?', getNewsItems);

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

function getNewsItems(req, res, next) {
  var searchTerm = req.params.term || '';
  var page = req.query.page || 1;
  var skip = page * pageSize;
  var query = {};
  if (searchTerm.length > 1) {
    query = {
      title: new RegExp(searchTerm, 'i')
      // $or: [{
      //   title: new RegExp(searchTerm, 'i')
      // }, {
      //   content: new RegExp(searchTerm, 'i')
      // }, {
      //   author: new RegExp(searchTerm, 'i')
      // }]
    }

  }

  NewsItemDB.find(query)
    .sort({
      dateCreated: 'desc'
    })
    .skip(skip)
    .limit(pageSize)
    .exec(function(err, news) {
      if (err) {
        console.log("ERROR", err);
      }
      res.send(news);
    });
}


module.exports = router;
