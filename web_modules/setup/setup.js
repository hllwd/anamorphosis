'use strict';

var THREE = require('three');
var Detector = require('detector');

var scene = require('objects/scene');
var camera = require('objects/camera');
var renderer = require('objects/renderer');
var control = require('objects/control');
var square = require('mesh/square');

function setup() {
    var container;
    var axes;

    // add the camera to the scene at the default position (0,0,0)
    scene.add(camera);
    // so pull it back
    camera.position.set(600, 0, 0);
    // and set the angle towards the scene origin
    camera.lookAt(scene.position);

    // container
    container = document.getElementsByTagName('body')[0];
    // attach renderer to the container
    container.appendChild(renderer.domElement);

    // axes
    axes = new THREE.AxisHelper(100);
    scene.add(axes);

    // square
    scene.add(square);
};

module.exports = setup;