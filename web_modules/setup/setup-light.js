'use strict';

var THREE = require('three');

var scene = require('objects/scene');

function setupLight(){
    // lights
    var hemiLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.6);
    hemiLight.position.set(0, 500, 0);

    var dirLight = new THREE.DirectionalLight(0xffffff, 0.6);
    dirLight.position.set(-1, 0.75, 1);
    dirLight.position.multiplyScalar(50);
    dirLight.name = 'dirlight';
    // dirLight.shadowCameraVisible = true;

    dirLight.castShadow = true;
    dirLight.shadowMapWidth = dirLight.shadowMapHeight = 1024 * 2;

    var d = 300;

    dirLight.shadowCameraLeft = -d;
    dirLight.shadowCameraRight = d;
    dirLight.shadowCameraTop = d;
    dirLight.shadowCameraBottom = -d;

    dirLight.shadowCameraFar = 3500;
    dirLight.shadowBias = -0.0001;
    dirLight.shadowDarkness = 0.35;

    scene.add(hemiLight);
    scene.add(dirLight);
};

module.exports = setupLight;