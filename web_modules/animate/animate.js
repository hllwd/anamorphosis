'use strict';

var scene = require('objects/scene');
var camera = require('objects/camera');
var renderer = require('objects/renderer');
var control = require('objects/control');

function animate(){
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
    control.update();
};

module.exports = animate;