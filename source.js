var RSS = require('./rss');

class Source {

	constructor(obj) {
		this.name = obj.name;
		this.abbr = obj.abbr;
		this.type = obj.type;
		this.twitter = obj.twitter;
		this.medium = obj.medium;
		this.reddit = obj.reddit;
		this.rss = obj.rss;
	}


	twitterFeed() {
		return emptyPromise();
	}

	rssFeed() {
		return emptyPromise();
	}

	mediumFeed() {
		var feedUrl = 'https://medium.com/feed/' + this.medium;
		return rssPromise(feedUrl);
	}

	redditFeed() {
		var feedUrl = 'https://www.reddit.com/r/' + this.reddit + '.rss';
		return rssPromise(feedUrl);
	}

	allFeeds() {
		return allPromise(this);
	}

}

function allPromise(source) {
	return new Promise(function(fulfill) {
		Promise.all([source.twitterFeed(), source.rssFeed(), source.mediumFeed(), source.redditFeed()]).then(function(result) {
			fulfill(result);
		})
	});
}

function rssPromise(url) {
	return new Promise(function(fulfill) {
		RSS.getTitles(url).then(function(titles) {
			fulfill(titles);
		});
	});
}

function emptyPromise(){
	return new Promise(function(fulfill) { fulfill([]) });
}

module.exports = Source;
