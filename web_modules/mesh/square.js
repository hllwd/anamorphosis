'use strict';

var THREE = require('three');

var mesh;
var geometry = new THREE.Geometry();
geometry.dynamic = true;

var material = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    side: THREE.DoubleSide
});

var y,z;
var step = 100;

for(var y = -step; y <= step; y+=step){
    for(var z = -step; z <= step; z+=step){
        geometry.vertices.push(
            new THREE.Vector3( 0, y, z )
        );
    }
}

var faces = [
    new THREE.Face3( 0, 3, 4 ),
    new THREE.Face3( 3, 6, 4 ),
    new THREE.Face3( 6, 7, 4 ),
    new THREE.Face3( 7, 8, 4 ),
    new THREE.Face3( 8, 5, 4 ),
    new THREE.Face3( 5, 2, 4 ),
    new THREE.Face3( 2, 1, 4 ),
    new THREE.Face3( 1, 0, 4 )
];

faces.forEach(function(face){
    geometry.faces.push( face );
});

mesh = new THREE.Mesh( geometry, material );

module.exports = mesh;