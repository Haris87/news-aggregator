var RSS = require('./rss');
var twitter = require('./twitter');
var cheerio = require('cheerio');

class NewsItem {

	constructor(obj) {
		this.title = obj.title || null;
		this.content = obj.content || null;
		this.media = obj.media || null;
    this.author = obj.author || null;
    this.url = obj.url || null;
		this.dateCreated = obj.dateCreated || null;
		this.dateAdded = obj.dateAdded || null;
    this.type = obj.type || null;
    this.source = obj.source || null;
	}

  static fromTwitter(tweet, source){
    var obj = {};
    obj.title = tweet.text;
		obj.content = tweet.text;
		obj.media = tweet.entities.media ? tweet.entities.media[0].media_url : null;
    obj.author = tweet.user.screen_name;
    obj.url = "https://twitter.com/"+tweet.user.screen_name+"/status/"+tweet.id_str;
		obj.dateCreated = parseTwitterDate(tweet.created_at);
		obj.dateAdded = new Date();
    obj.type = 'TWEET';
    obj.source = source;
    return new NewsItem(obj);
  }

  static fromReddit(feed, source){
    var obj = {};
    obj.title = feed.title;
		obj.content = feed.content;
		obj.media = null;
    obj.author = feed.author;
    obj.url = feed.link;
		obj.dateCreated = feed.pubDate;
		obj.dateAdded = new Date();
    obj.type = 'REDDIT';
    obj.source = source;
    return new NewsItem(obj);
  }

  static fromMedium(feed, source){
    var obj = {};
    obj.title = feed.title;
		obj.content = feed['content:encoded'];
		obj.media = null;
    obj.author = feed.creator;
    obj.url = feed.link;
		obj.dateCreated = new Date(feed.pubDate);
		obj.dateAdded = new Date();
    obj.type = 'MEDIUM';
    obj.source = source;
    return new NewsItem(obj);
  }

  static fromRSS(feed, source){
    var obj = {};
    obj.title = feed.title;
		obj.content = feed.content || feed.contentSnippet;
		obj.media = feed.image ? feed.image.url : null ;
    obj.author = feed.creator || feed.author || feed['dc:creator'];
    obj.url = feed.link || feed.url;
		obj.dateCreated = feed.pubDate ? new Date(feed.pubDate) : null;
		obj.dateAdded = new Date();
    obj.type = 'RSS';
    obj.source = source;
    return new NewsItem(obj);
  }

}

function stripHtml(str) {
  return str.replace(/<(?:.|\n)*?>/gm, '');
}

function getRedditImage(content){
  var $ = cheerio.load(content);
  return $('img');
}

function parseTwitterDate(aDate) {
  return new Date(Date.parse(aDate.replace(/( \+)/, ' UTC$1')));
  //sample: Wed Mar 13 09:06:07 +0000 2013
}

module.exports = NewsItem;
