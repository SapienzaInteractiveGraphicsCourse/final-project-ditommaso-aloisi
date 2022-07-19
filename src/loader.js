// INITIALIZING THE LOADER
var loader = new THREE.GLTFLoader();

// LOADING CAR MODEL 
var carPosX = 0.0;
var carPosY = 0.1;
var carPosZ = -5;
// LOAD CAR
var car1;
loader.load( '../models/cars/vintage_sport_car/scene.gltf', function ( gltf ) {
  car1 = gltf.scene;
  car1.scale.multiplyScalar(0.30); 
  car1.name = "car1";
  car1.castShadow = true;
  car1.receiveShadow = true;
  car1.position.setX(carPosX);
  car1.position.setY(carPosY);
  car1.position.setZ(carPosZ);
  car1.rotation.y = Math.PI / 10;
  //car1.position.setZ(-170.0); // HELPFUL DEBUGGER

    gltf.scene.traverse( child => {
        if ( child.material ) child.material.metalness = 0.80;
    } );
  car1.rotateY(THREE.Math.degToRad(180));
  scene.add( car1 );

  var texture = new THREE.TextureLoader().load( '../textures/pngkey.com-flames-png-1564108.png' );
  texture.encoding = THREE.sRGBEncoding;
  texture.flipY = true;
  texture.repeat.set(0.9, 0.9);
  chassis = car1.getObjectByName('Object_148');
  chassis.material.map = texture;
  chassis.material.needsUpdate = true;

  
  var textureWheel = new THREE.TextureLoader().load( '../textures/PngItem_2081052.png' );
  frontWheelLeft = car1.getObjectByName('Object_127');
  textureWheel.encoding = THREE.sRGBEncoding;
  frontWheelLeft.material.map = textureWheel;
  frontWheelLeft.material.needsUpdate = true;

  // VISUALIZAING THE HIERARCHY OF THE CAR
  console.log(dumpObject(car1).join('\n'));
});





// LOADING BITCOIN MODEL 
var bitcoin;
var bitPosX = coinMid;
var bitPosY = 0.05;
var bitPosZ = -5;
loader.load( '../models/other entities/bitcoin/scene.gltf', function ( gltf ) {
    bitcoin = gltf.scene;
    bitcoin.scale.multiplyScalar(0.13); 
    bitcoin.position.setX(bitPosX);
    bitcoin.position.setY(bitPosY);
    bitcoin.position.setZ(bitPosZ);
    bitcoin.name = "bitcoin"
    bitcoin.castShadow = true;
    bitcoin.receiveShadow = true;
    //bitcoin.rotateY(THREE.Math.degToRad(180));
    //scene.add(bitcoin);
    //console.log(dumpObject(bitcoin).join('\n'));
})

// LOADING NITRO MODEL
var nitro;
var nitroPosX = 0;
var nitroPosY = 0.05;
var nitroPosZ = -6;
loader.load( '../models/other entities/nitrogen_bottle/scene.gltf', function ( gltf ) {
  nitro = gltf.scene;
  nitro.scale.multiplyScalar(0.01); 
  nitro.position.setX(nitroPosX);
  nitro.position.setY(nitroPosY);
  nitro.position.setZ(nitroPosZ);
  nitro.name = "nitro"
  nitro.castShadow = true;
  nitro.receiveShadow = true;
  //bitcoin.rotateY(THREE.Math.degToRad(180));
  //scene.add(nitro);
  //console.log(dumpObject(bitcoin).join('\n'));

})


// LOADING ENVIRONMENT MODEL 
loader.load( '../models/maps/80s-style/neonroad_endless_loop/scene.gltf', function ( gltf ) {
    ambient = gltf.scene;
    ambient.name = "ambient1";
    scene.add( ambient );
    
    //VISUALIZING THE HIERARCHY OF OUR ENVIRONMENT 
    //console.log(dumpObject(ambient).join('\n'));
});


// LOADING FENCE MODEL 

// var loader = new THREE.TextureLoader();
// loader.load( '../textures/pngkey.com-flames-png-1564108.png', function ( texture ) {

//     var geometry = new THREE.SphereGeometry( 200, 200, 200);
//     geometry.setPosition(10, 10, 10);

//     var material = new THREE.MeshBasicMaterial( { map: texture, overdraw: 0.5 } );
//     var mesh = new THREE.Mesh( geometry, material );
//     scene.add( mesh );

// } );



