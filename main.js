var Source = require('./source');
var feedUrl = 'https://medium.com/feed/@WeBetCrypto';

var webetcrypto = new Source({
	name: 'WeBetCrypto',
	abbr: 'WBA',
	type: 'coin',
	medium: '@WeBetCrypto',
	reddit: 'WeBetCryptoCasino',
	twitter: 'WeBetCrypto'
});

webetcrypto.allFeeds().then(function(result){
	console.log("\x1b[33m%s\x1b[0m", "ALL FEEDS", result);
});
