'use strict';

var scene = require('objects/scene');
var camera = require('objects/camera');
var renderer = require('objects/renderer');
var control = require('objects/control');

function animate() {

    //var matrixWorldInverse = camera.matrixWorldInverse.clone();
    renderer.render(scene, camera);
    control.update();
    requestAnimationFrame(animate);
};

module.exports = animate;