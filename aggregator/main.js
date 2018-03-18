var Source = require('./source');
var NewsItem = require('./news-item');
var feedUrl = 'https://medium.com/feed/@WeBetCrypto';
var Topic = require('./topic-detection');
var mlab = require('./db');
var Cron = require('./cron');
var Crawler = require('./crawler');

mlab.connect();
// Cron.start();
Crawler.getNews().then(function(items){
	console.log("Got", items.length, "items");
	console.log(getByteCount(items.toString()), "bytes");
})

function getByteCount(s){
  var count = 0, stringLength = s.length, i;
  s = String( s || "" );
  for( i = 0 ; i < stringLength ; i++ )
  {
    var partCount = encodeURI( s[i] ).split("%").length;
    count += partCount==1?1:partCount-1;
  }
  return count;
}
