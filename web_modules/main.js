;!function(THREE){

    var container, scene, camera, renderer, mouse, projector, outlineMaterial;

    function setup(){
        var w = window.innerWidth;
        var h = window.innerHeight;
        var viewAngle = 40;
        var aspect = w / h;
        var near = 0.1;
        var far = 20000;
        var axes;

        var skyBoxGeometry, skyBoxMaterial, skyBox;

        // scene
        scene = new THREE.Scene();

        // camera
        camera = new THREE.PerspectiveCamera(viewAngle, aspect, near, far);
        // add the camera to the scene at the default position (0,0,0)
        scene.add(camera);
        // so pull it back
        camera.position.set(-600, 600, -600);
        // and set the angle towards the scene origin
        camera.lookAt(scene.position);

        // renderer
        if (Detector.webgl) {
            renderer = new THREE.WebGLRenderer({
                antialias: true
            });
        } else {
            renderer = new THREE.CanvasRenderer();
        }
        renderer.setSize(w, h);

        // container
        container = document.getElementsByTagName('body')[0];
        // attach renderer to the container
        container.appendChild(renderer.domElement);

        // lights
        setupLight();

        // axes
        axes = new THREE.AxisHelper(100);
        scene.add(axes);

        render();
    };

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
    }

    function render() {
        requestAnimationFrame( render );
        renderer.render( scene, camera );
    }

    setup();


}(THREE);