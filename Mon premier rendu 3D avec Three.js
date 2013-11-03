<!doctype html>
<html>
  <head>
    <title>Mon premier rendu 3D avec Three.js</title>
    <meta charset="utf-8">
    <link  href="css/main.css" rel="stylesheet"/>
  </head>
<body>
    
  <div id="container"></div>

  <script src="http://mrdoob.github.com/three.js/build/three.min.js"></script>
  <script type="text/javascript">
  <!-- C'est ici que nous utiliserons Three.js -->
  </script>
<script>

    var camera, scene, renderer;
    var geometry, material, mesh;

    init();
    animate();

    function init() {

        camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 );
        camera.position.z = 1000;

        scene = new THREE.Scene();

        geometry = new THREE.CubeGeometry( 200, 200, 200 );
        material = new THREE.MeshBasicMaterial( { color: 0xff0000, wireframe: true } );

        mesh = new THREE.Mesh( geometry, material );
        scene.add( mesh );

        renderer = new THREE.CanvasRenderer();
        renderer.setSize( window.innerWidth, window.innerHeight );

        document.body.appendChild( renderer.domElement );

    }

    function animate() {

        // note: three.js includes requestAnimationFrame shim
        requestAnimationFrame( animate );

        mesh.rotation.x += 0.01;
        mesh.rotation.y += 0.02;

        renderer.render( scene, camera );

    }

</script>
</body>
</html>
