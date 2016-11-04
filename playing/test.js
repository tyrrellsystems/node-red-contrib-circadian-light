var suncalc = require('suncalc');

var times = suncalc.getTimes(new Date(),51.0258791, -1.3969675);

var noonHours = times.solarNoon.getHours();
var noonMins = times.solarNoon.getMinutes();

