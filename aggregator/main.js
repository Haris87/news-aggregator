var mlab = require('./db');
var Crawler = require('./crawler');

mlab.connect();
// Cron.start();
Crawler.startCrawling(2);
