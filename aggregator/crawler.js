var Source = require('./source');
var NewsItem = require('./news-item');

var Source = require('./source');
var NewsItem = require('./news-item');
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
    var webetcrypto = new Source({
      name: 'WeBetCrypto',
      abbr: 'WBA',
      type: 'coin',
      medium: '@WeBetCrypto',
      reddit: 'WeBetCryptoCasino',
      twitter: 'WeBetCrypto'
    });

    var molyneux = new Source({
      name: 'Stefan Molyneux',
      twitter: 'StefanMolyneux'
    });

    var bbc = new Source({
      name: 'BBC',
      rss: 'http://feeds.bbci.co.uk/news/world/rss.xml'
    });

    var coindesk = new Source({
      name: 'Coin Desk',
      rss: 'http://coindesk.com/feed'
    });

    var cointelegraph = new Source({
      name: 'Coin Telegraph',
      rss: 'https://cointelegraph.com/feed'
    });


    var sources = [webetcrypto, molyneux, bbc, coindesk, cointelegraph];

    fulfill(sources);
  });
}

function getNews() {

  console.log('crawler: started.');
  return new Promise(function(fulfill) {

    getSources().then(function(sources){

      var newsItemsPromises = [];
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

        fulfill(flattened);
      });

    });

  });

}

module.exports = {
  getNews: getNews
}
