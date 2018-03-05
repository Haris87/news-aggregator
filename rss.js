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

module.exports = {
	getTitles: getTitles
}
