var Source = require('./source');
var NewsItem = require('./news-item');
var feedUrl = 'https://medium.com/feed/@WeBetCrypto';
var Topic = require('./topic-detection');
var mlab = require('./db');
var Cron = require('./cron');
var Crawler = require('./crawler');

mlab.connect();
// Cron.start();
Crawler.startCrawling(2);
