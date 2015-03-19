'use strict';

require('reset.scss');

var THREE = require('three');

var setup = require('setup/setup');
var setupLight = require('setup/setup-light');

var animate = require('animate/animate');

var camera = require('objects/camera');

var size = require('util/size');

setup();
setupLight();
animate();

document.getElementsByTagName('body')[0].addEventListener('mouseup', function (ev) {
    // @see http://stackoverflow.com/questions/11534000/three-js-converting-3d-position-to-2d-screen-position
    var p = new THREE.Vector3(0, 100, 100);

    //var raycaster = new THREE.Raycaster();
    // v is normalized in Normalized Device Coordinates
    // vector needs to be normalized
    // http://threejs.org/docs/#Reference/Core/Raycaster
    var v = p.project(camera);

    // if you want to retrive reel coords
    //v.x = (v.x + 1) / 2 * size.w;
    //v.y = -(v.y - 1) / 2 * size.h;

    // ??? @see https://github.com/mrdoob/three.js/issues/5587
    //v.z = .5;

    var raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(v, camera );
    console.log(raycaster.ray)

});
