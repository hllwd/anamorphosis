'use strict';

require('reset.scss');
var Hammer = require('hammer');
var setup = require('setup/setup');
var setupLight = require('setup/setup-light');
var animate = require('animate/animate');

setup();
setupLight();
animate();

var hammertime = new Hammer(document.getElementsByTagName('body')[0]);
hammertime.on('panend', function(ev) {
    console.log(ev);
});
