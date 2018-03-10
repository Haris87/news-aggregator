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

  static fromTwitter(tweets, source) {
    var result = [];
    tweets.forEach(function(tweet) {
      var obj = {};
      obj.title = tweet.text;
      obj.content = tweet.text;
      obj.media = tweet.entities.media ? tweet.entities.media[0].media_url : null;
      obj.author = tweet.user.screen_name;
      obj.url = "https://twitter.com/" + tweet.user.screen_name + "/status/" + tweet.id_str;
      obj.dateCreated = parseTwitterDate(tweet.created_at);
      obj.dateAdded = new Date();
      obj.type = 'TWEET';
      obj.source = source;
      result.push(new NewsItem(obj));
    });
    return result;

  }

  static fromReddit(feed, source) {
    var result = [];
    feed.forEach(function(item) {

      var obj = {};
      obj.title = item.title;
      obj.content = item.content;
      obj.media = null;
      obj.author = item.author;
      obj.url = item.link;
      obj.dateCreated = item.pubDate;
      obj.dateAdded = new Date();
      obj.type = 'REDDIT';
      obj.source = source;
      result.push(new NewsItem(obj));
    });
    return result;

  }

  static fromMedium(feed, source) {
    var result = [];
    feed.forEach(function(item) {

      var obj = {};
      obj.title = item.title;
      obj.content = item['content:encoded'];
      obj.media = null;
      obj.author = item.creator;
      obj.url = item.link;
      obj.dateCreated = new Date(item.pubDate);
      obj.dateAdded = new Date();
      obj.type = 'MEDIUM';
      obj.source = source;
      result.push(new NewsItem(obj));
    });
    return result;

  }

  static fromRSS(feed, source) {
    var result = [];
    feed.forEach(function(item) {

      var obj = {};
      obj.title = item.title;
      obj.content = item.content || item.contentSnippet;
      obj.media = item.image ? item.image.url : null;
      obj.author = item.creator || item.author || item['dc:creator'];
      obj.url = item.link || item.url;
      obj.dateCreated = item.pubDate ? new Date(item.pubDate) : null;
      obj.dateAdded = new Date();
      obj.type = 'RSS';
      obj.source = source;
      result.push(new NewsItem(obj));
    });
    return result;

  }

  static allSources(sources) {
    var twitter = sources[0];
    var rss = sources[1];
    var medium = sources[2];
    var reddit = sources[3];
  }

}

function stripHtml(str) {
  return str.replace(/<(?:.|\n)*?>/gm, '');
}

function getRedditImage(content) {
  var $ = cheerio.load(content);
  return $('img');
}

function parseTwitterDate(aDate) {
  return new Date(Date.parse(aDate.replace(/( \+)/, ' UTC$1')));
  //sample: Wed Mar 13 09:06:07 +0000 2013
}

module.exports = NewsItem;
