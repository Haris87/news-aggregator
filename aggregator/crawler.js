var Source = require('./source');
var SourceDB = require('./models/source');
var NewsItem = require('./news-item');
var NewsItemDB = require('./models/news-item');

var feedUrl = 'https://medium.com/feed/@WeBetCrypto';
var Topic = require('./topic-detection');
var mlab = require('./db');
var Cron = require('./cron');


function allFeeds(source) {
  return new Promise(function(fulfill) {
    source.allFeeds().then(function(result) {
      fulfill(NewsItem.allFeeds(result, source.name));
    });
  });
}

function getSources(){

  return new Promise(function(fulfill) {

    SourceDB.find({}, function(err, newsItems){
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
// todo: write to db
  console.log('crawler: started.');
  return new Promise(function(fulfill) {

    getSources().then(function(sources){
      console.log(sources[0]);
      var newsItemsPromises = [];

      // iterate through source and get newsitems from all feeds
      for (var i = 0; i < sources.length; i++) {
        var source = sources[i];
        console.log('crawler:', i, source.name);
        newsItemsPromises.push(allFeeds(source));
      }

      Promise.all(newsItemsPromises).then(function(result) {
        console.log('crawler: done.');
        var flattened = result.reduce(function(a, b) {
          return a.concat(b);
        }, []);

        // iterate newsitems and save to db
        for (var i = 0; i < flattened.length; i++) {
          var newsItem = new NewsItemDB(flattened[i]);
          newsItem.save(function(err){

            if(err){

              if(err.code === 11000){
                console.log('ERROR 11000: News item already exists in DB.');
              } else {
                console.log('ERROR '+err.code+': '+err.message);
              }

            } else {
              console.log('SUCESS: News item written in DB.');
            }

          });
        }

        fulfill(flattened);
      });

    });

  });

}

module.exports = {
  getNews: getNews
}
