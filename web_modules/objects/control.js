'use strict';

var THREE = require('three');
var camera = require('objects/camera');
var renderer = require('objects/renderer');

var control  = new THREE.OrbitControls(camera, renderer.domElement);

module.exports = control;