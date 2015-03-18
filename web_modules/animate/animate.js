'use strict';

var scene = require('objects/scene');
var camera = require('objects/camera');
var renderer = require('objects/renderer');

function animate(){
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
};

module.exports = animate;