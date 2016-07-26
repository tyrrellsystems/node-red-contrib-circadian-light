var suncalc = require('suncalc');

for (var i=0; i<20; i++) {
	var d = new Date(2016,6,26,3+i,0,0,0);
	var d2 = new Date(2016,6,26,3+i,15,0,0);
	var d3 = new Date(2016,6,26,3+i,30,0,0);
	var d4 = new Date(2016,6,26,3+i,45,0,0);
	var pos = suncalc.getPosition(d,51.0353591,-1.3922113);
	var pos2 = suncalc.getPosition(d2,51.0353591,-1.3922113);
	var pos3 = suncalc.getPosition(d,51.0353591,-1.3922113);
	var pos4 = suncalc.getPosition(d2,51.0353591,-1.3922113);
	console.log(d);
	console.log(pos);
	console.log(d2);
	console.log(pos2);
	console.log(d3);
	console.log(pos3);
	console.log(d4);
	console.log(pos4);
}