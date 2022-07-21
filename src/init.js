// import * from "./bitcoins.js";


// INITIALIZING THE SCENE AND OTHER USEFUL THINGS SUCH AS LIGHT AND LOADERS
//SCENE INITIALIZATION
scene = new THREE.Scene();
//scene.background = new THREE.Color('black');

// CAMERA INITIALIZATION
const fov = 45;
const aspect = 2;  // the canvas default
const near = 0.1;
const far = 10000;
camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.x = 1;
camera.position.z = -1.75;
// camera.position.z = -165; // HELPFUL DEBUGGER
camera.position.y = 1;
camera.rotation.y = 0.2;
scene.add( camera );

// RENDERER INITIALIZATION
renderer = new THREE.WebGLRenderer( { antialias: true} );
renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

renderer.toneMapping = THREE.LinearToneMapping;
renderer.toneMappingExposure = Math.pow( 0.94, 5.0 );
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

// INITIALIZING POST PROCESSING FILTERS
//const renderScene = new THREE.RenderPass(scene, camera);
//const composer = new THREE.EffectComposer(renderer);
//composer.addPass(renderScene);

// AMBIENT LIGHT
const colorA = 0xffdbdb;
const intensityA = 3.5;
const ambLight = new THREE.AmbientLight(colorA, intensityA);
scene.add(ambLight);

// DIRECTIONAL LIGHT
const colorD = 0xFF0000;
const intensityD = 4.0;
const dirLight = new THREE.DirectionalLight(colorD, intensityD);
dirLight.position.set(0, 10.0, -720);
dirLight.target.position.set(0, 0, 25);
dirLight.castShadow = true;
scene.add(dirLight);
scene.add(dirLight.target);
//HELPER TO VISUALIZE OUR DIRCETIONAL LIGHT
const helper = new THREE.DirectionalLightHelper(dirLight);
//scene.add(helper);

//MARS

var marsColor = new THREE.TextureLoader().load( '../textures/marsColor.jpg' );
var marsNormal = new THREE.TextureLoader().load( '../textures/marsNormal.png' );
var marsSpecular = new THREE.TextureLoader().load( '../textures/marsSpecular.png' );
var geometry = new THREE.SphereGeometry( 60, 160, 80);
var material = new THREE.MeshPhongMaterial( { map: marsColor, bumpMap: marsNormal, specularMap: marsSpecular} );
var mars = new THREE.Mesh( geometry, material );
mars.position.x = -300;
mars.position.y = 50;
mars.position.z = -600;
scene.add( mars );

function animate() {
    renderer.render( scene, camera );
    requestAnimationFrame( animate );
    mars.rotation.y += 0.01;

    if (bitcoin) {random_bitcoin_spawn(bitcoin); rotateBitcoin();}
    if (nitro) random_nitro_spawn(nitro);
    if (car1 && camera.position.z > -715){
      camera.position.z -= 0.07;
      car1.position.z -= 0.07;
      rotateWheel(car1);
      TWEEN.update();
      bitcoin_collision(car1);
      nitro_collision(car1);
    }
}; animate();

