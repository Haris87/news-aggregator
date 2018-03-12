var RSS = require('./rss');
var twitter = require('./twitter');

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
		if(this.twitter !== undefined){
			return twitter.getTimeline(this.twitter);
			// return twitter.getTimelineText(this.twitter);
		}
		return emptyPromise();
	}

	rssFeed() {
		if(this.rss !== undefined){
			return rssPromise(this.rss);
		}
		return emptyPromise();
	}

	mediumFeed() {
		if(this.medium !== undefined){
			var feedUrl = 'https://medium.com/feed/' + this.medium;
			return rssPromise(feedUrl);
		}
		return emptyPromise();
	}

	redditFeed() {
		if(this.reddit !== undefined){
			var feedUrl = 'https://www.reddit.com/r/' + this.reddit + '.rss';
			return rssPromise(feedUrl);
		}
		return emptyPromise();
	}

	allFeeds() {
		return allPromise(this);
	}

	static fromDB(sources) {
		var items = []
		for (var i = 0; i < sources.length; i++) {
			items.push(new Source(sources[i]))
		}
		return items;
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
		RSS.getFeed(url).then(function(titles) {
			fulfill(titles);
		});
	});
}

function emptyPromise(){
	return new Promise(function(fulfill) { fulfill([]) });
}

module.exports = Source;
