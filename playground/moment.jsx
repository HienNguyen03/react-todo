var moment = require('moment');

console.log(moment().format());

var now = moment().unix();
console.log(now);
var timestamp = 1496447964;
var currentMoment = moment.unix(timestamp);
console.log('Current moment: ' + currentMoment.format('MMM D, YY @ h:mm a'));
console.log('Current moment: ' + currentMoment.format('MMMM Do, YYYY @ hh:mm A'));
