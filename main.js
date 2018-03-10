var Source = require('./source');
var NewsItem = require('./news-item');
var feedUrl = 'https://medium.com/feed/@WeBetCrypto';
var Topic = require('./topic-detection');

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
})

function allFeeds(source) {
	source.allFeeds().then(function(result) {

		console.log("\x1b[35m%s\x1b[0m", "ALL", NewsItem.allFeeds(result));
	});
}

function twitterFeed(source){
	source.twitterFeed().then(function(result) {
		console.log(result[1]);
		console.log("\x1b[35m%s\x1b[0m", "TWEET[1]", NewsItem.fromTwitter(result, source.name));
	});
}

function redditFeed(source){
	source.redditFeed().then(function(result) {
		console.log(result[0]);
		console.log("\x1b[35m%s\x1b[0m", "REDDIT[0]", NewsItem.fromReddit(result, source.name));
	});
}

function mediumFeed(source){
	source.mediumFeed().then(function(result) {
		console.log(result[0]);
		console.log("\x1b[35m%s\x1b[0m", "MEDIUM[0]", NewsItem.fromMedium(result, source.name));
	});
}

function rssFeed(source){
	source.rssFeed().then(function(result) {
		console.log(result[0]);
		console.log("\x1b[35m%s\x1b[0m", "RSS[0]", NewsItem.fromRSS(result, source.name));
	});
}

// rssFeed(cointelegraph);
// mediumFeed(webetcrypto);
// redditFeed(webetcrypto);
// twitterFeed(molyneux);
allFeeds(webetcrypto);
