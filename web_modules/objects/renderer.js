'use strict';

var THREE = require('three');
var Detector = require('detector');

var size = require('util/size');

var renderer;


// renderer
if (Detector.webgl) {
    renderer = new THREE.WebGLRenderer({
        antialias: true
    });
} else {
    renderer = new THREE.CanvasRenderer();
}
renderer.setSize(size.w, size.h);

module.exports = renderer;