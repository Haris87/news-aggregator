const Crawler = require('./crawler');
const mlab = require('./db');
mlab.connect();
console.log("Crawler started.");
Crawler.startCrawling(10);
