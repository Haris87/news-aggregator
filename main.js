var Source = require('./source');
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

webetcrypto.allFeeds().then(function(result){
	var merged = [].concat.apply([], result);
	console.log("\x1b[35m%s\x1b[0m", "ALL FEEDS", Topic.getTopics(merged)[0]);
});
