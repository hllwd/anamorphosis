'use strict';

var THREE = require('three');

var mesh;
var geometry = new THREE.Geometry();
var material = new THREE.MeshBasicMaterial({
    color: 0xffffff
});

material.side = THREE.DoubleSide;

geometry.vertices.push(
    new THREE.Vector3( 0,  100, 100 ),
    new THREE.Vector3( 0, 100, -100 ),
    new THREE.Vector3( 0, -100, 100 ),
    new THREE.Vector3( 0, -100, -100 )
);

geometry.faces.push( new THREE.Face3( 0, 1, 2 ) );
geometry.faces.push( new THREE.Face3( 1, 2, 3 ) );


mesh = new THREE.Mesh( geometry, material );

module.exports = mesh;