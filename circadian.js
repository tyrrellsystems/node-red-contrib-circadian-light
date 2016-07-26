/**
 * Copyright 2016 IBM Corp.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 **/

"use strict";

module.exports = function(RED) {

	var suncalc = require('suncalc');

	function circadianLight(n) {
		RED.nodes.createNode(this,n);
		this.lat = n.lat;
		this.lon = n.lon;
		this.period = n.period;
		this.name = n.name;
		this.topic = n.topic;

		var node = this;

		function calcColourTemp() {
			var pos = suncalc.getPosition(new Date(),node.lat, node.lon);
			console.log(pos);
		};

		this.interval = setInterval(calcColourTemp,(node.period * 60 * 1000));

		calcColourTemp();

		node.on('close', function() {
			clearInterval(node.interval);
		});
	};

	RED.nodes.registerType("Circadian Light", circadianLight);

}