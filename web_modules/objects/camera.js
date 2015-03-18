'use strict';

var THREE = require('three');
var size = require('util/size');

var viewAngle = 40;
var aspect = size.w / size.h;
var near = 0.1;
var far = 20000;

var camera = new THREE.PerspectiveCamera(viewAngle, aspect, near, far);

module.exports = camera;