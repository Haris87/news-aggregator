var Twitter = require('twitter');
require('dotenv').config();

var client = new Twitter({
	consumer_key: process.env.CONSUMER_KEY,
	consumer_secret: process.env.CONSUMER_SECRET,
	access_token_key: process.env.TOKEN_KEY,
	access_token_secret: process.env.TOKEN_SECRET,
});

function getTimelineText(username) {
	var params = {
		screen_name: username
	};

	return new Promise(function(fulfill, reject){
		client.get('statuses/user_timeline', params, function(error, tweets, response) {
			if (!error) {
				fulfill(tweets.map(function(tweet) { return tweet.text } ));
			}
			reject(error);
		});
	});

}

function getTimeline(username) {
	var params = {
		screen_name: username
	};

	return new Promise(function(fulfill, reject){
		client.get('statuses/user_timeline', params, function(error, tweets, response) {
			if (!error) {
				fulfill(tweets);
			}
			reject(error);
		});
	});

}


module.exports = {
	getTimelineText: getTimelineText,
	getTimeline: getTimeline
};
