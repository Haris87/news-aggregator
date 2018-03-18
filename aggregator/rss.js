var Parser = require('rss-parser');
var parser = new Parser();

function getTitles(url) {
	var feed = parser.parseURL(url);

	return new Promise(function(fulfill, reject) {
		feed.then(function(feed) {
			var titles = [];
			feed.items.forEach(item => {
				titles.push(item.title);
			});
			fulfill(titles);
		});
	});
}

function getFeed(url) {
	var feed = parser.parseURL(url);

	return new Promise(function(fulfill, reject) {
		feed.then(function(feed) {
			fulfill(feed.items);
		}).catch(function(err){
			console.log("RSS failed for", url);
			reject([]);
		});
	});
}

module.exports = {
	getTitles: getTitles,
	getFeed: getFeed
}
