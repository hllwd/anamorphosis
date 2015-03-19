'use strict';

var scene = require('objects/scene');
var camera = require('objects/camera');
var renderer = require('objects/renderer');
var control = require('objects/control');

function animate(){
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
    control.update();

    /*var p = new THREE.Vector3(100, 0, 0);
    //var raycaster = new THREE.Raycaster();
    var v = p.project( camera );
    console.log(v);*/
};

module.exports = animate;