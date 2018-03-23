var Source = require('./source');
var SourceDB = require('./models/source');
var NewsItem = require('./news-item');
var NewsItemDB = require('./models/news-item');

var Topic = require('./topic-detection');
var mlab = require('./db');
var cronJob = require('cron').CronJob;
var Winston = require('winston');


var winston = new Winston.Logger({
  level: 'verbose',
  transports: [
    new Winston.transports.Console({
      timestamp: true
    })
    // new Winston.transports.File({
    //   filename: 'app.log',
    //   timestamp: true
    // })
  ]
});

function allFeeds(source) {
  return new Promise(function(fulfill) {
    source.allFeeds().then(function(result) {
      fulfill(NewsItem.allFeeds(result, source.name));
    });
  });
}

function getSources() {

  return new Promise(function(fulfill) {

    SourceDB.find({}, function(err, newsItems) {
      fulfill(Source.fromDB(newsItems));
    });

    // var webetcrypto = new Source({
    //   name: 'WeBetCrypto',
    //   abbr: 'WBA',
    //   type: 'coin',
    //   medium: '@WeBetCrypto',
    //   reddit: 'WeBetCryptoCasino',
    //   twitter: 'WeBetCrypto'
    // });
    //
    // var molyneux = new Source({
    //   name: 'Stefan Molyneux',
    //   twitter: 'StefanMolyneux'
    // });
    //
    // var bbc = new Source({
    //   name: 'BBC',
    //   rss: 'http://feeds.bbci.co.uk/news/world/rss.xml'
    // });
    //
    // var coindesk = new Source({
    //   name: 'Coin Desk',
    //   rss: 'http://coindesk.com/feed'
    // });
    //
    // var cointelegraph = new Source({
    //   name: 'Coin Telegraph',
    //   rss: 'https://cointelegraph.com/feed'
    // });

  });
}

function getNews() {

  winston.log('info', 'crawler getting news.');
  return new Promise(function(fulfill) {

    getSources().then(function(sources) {
      var newsItemsPromises = [];

      // iterate through source and get newsitems from all feeds
      for (var i = 0; i < sources.length; i++) {
        var source = sources[i];
        // winston.log('info', 'crawler', i, source.name);
        newsItemsPromises.push(allFeeds(source));
      }

      Promise.all(newsItemsPromises).then(function(result) {
        winston.log('info', 'crawler done.');
        var flattened = result.reduce(function(a, b) {
          return a.concat(b);
        }, []);

        var now = new Date();
        var oneWeekAgo = new Date(now.getTime() - (60*60*24*7*1000));


        // iterate newsitems and save to db
        for (var i = 0; i < flattened.length; i++) {
          var newsItem = new NewsItemDB(flattened[i]);

          var newsDate = new Date(newsItem.dateCreated);

          if(newsDate.getTime() < oneWeekAgo.getTime()){
            continue;
          }

          newsItem.save(function(err) {

            if (err) {

              if (err.code === 11000) {
                // winston.log('error', 'News item already exists in DB.');
              } else {
                // winston.log('error', err.message);
              }

            } else {
              winston.log('info', 'News item written in DB.');
            }

          });
        }

        fulfill(flattened);
      });

    });

  });

}

function deleteOldNews(){
    var daysAgo = 7;
    var cutoff = new Date();
    cutoff.setDate(cutoff.getDate()-daysAgo);
    NewsItemDB.find({dateCreated: {$lt: cutoff}}).remove().exec();
}

function startCrawling(minutes) {
  var cronInterval = '00 */' + minutes + ' * * * *';
  var job = new cronJob(cronInterval, function() {
    winston.log('info', 'cron ' + minutes + 'm');

    // get news from feeds
    getNews().then(function(items) {
      winston.log('info', "Got", items.length, "items");
      winston.log('info', getByteCount(items.toString()), "bytes");
    });
    // delete items older than a week
    deleteOldNews();
  }, null, false, 'UTC');

  job.start();

}

function getByteCount(s) {
  var count = 0,
    stringLength = s.length,
    i;
  s = String(s || "");
  for (i = 0; i < stringLength; i++) {
    var partCount = encodeURI(s[i]).split("%").length;
    count += partCount == 1 ? 1 : partCount - 1;
  }
  return count;
}

module.exports = {
  startCrawling: startCrawling,
  getNews: getNews
}
