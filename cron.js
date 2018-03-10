var cronJob = require('cron').CronJob;

/**
# ┌────────────── second (optional) - 0-59
# │ ┌──────────── minute - 0-59
# │ │ ┌────────── hour - 0-23
# │ │ │ ┌──────── day of month - 1-31
# │ │ │ │ ┌────── month - 1-12
# │ │ │ │ │ ┌──── day of week - 0-7 (or names, 0 or 7 are sunday)
# │ │ │ │ │ │
# * * * * * *
*/

var tensec = new cronJob('*/10 * * * * *', function(){
  console.log('cron: 10s');
}, null, false, 'UTC');

var tenmin = new cronJob('* */10 * * * *', function(){
  // console.log('cron: 10m');
}, null, false, 'UTC');

var weekly = new cronJob('00 00 00 * * Sun', function(){
    // console.log('cron: week');
}, null, false, 'UTC');

var daily = new cronJob('00 00 00 * * *', function(){
  // console.log('cron: day');
}, null, false, 'UTC');


var cron = {
  start: function(){
    tensec.start();
    tenmin.start();
    weekly.start();
    daily.start();
  },
  stop: function(){
    tensec.stop();
    tenmin.stop();
    weekly.stop();
    daily.stop();
  }
}

module.exports = cron;
