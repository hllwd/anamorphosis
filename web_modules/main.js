'use strict';

require('reset.scss');

var THREE = require('three');

var setup = require('setup/setup');
var setupLight = require('setup/setup-light');
var animate = require('animate/animate');
var camera = require('objects/camera');
var size = require('util/size');
var square = require('mesh/square');
var scene = require('objects/scene');

setup();
setupLight();
animate();

document.getElementsByTagName('body')[0].addEventListener('mouseup', function (ev) {

    var newVertices = [];

    square.geometry.vertices.forEach(function (v, i) {
        // get projected point
        // @see http://stackoverflow.com/questions/11534000/three-js-converting-3d-position-to-2d-screen-position
        var p = v.project(camera);
        // raycaster
        var raycaster = new THREE.Raycaster();
        raycaster.setFromCamera(p, camera);
        newVertices.push(raycaster.ray.at(400 + (Math.random() * 400)));
    });

    // http://stackoverflow.com/questions/15384078/updating-a-geometry-inside-a-mesh-does-nothing
    square.geometry.dynamic = true;
    square.geometry.vertices = newVertices;
    square.geometry.verticesNeedUpdate = true;

});
