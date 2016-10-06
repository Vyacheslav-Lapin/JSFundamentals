// require('three-js');
// require('dat-gui');

addEventListener("DOMContentLoaded", () => {

    const ball = {
        positionX: 0,
        positionY: 0,
        positionZ: 0,
        rotationX: 0,
        rotationY: 0,
        rotationZ: 0
    };

    console.log(`starting...`);

    const gui = new dat.GUI();
    gui.add(ball, 'positionX').min(-100).max(100).step(1);
    gui.add(ball, 'positionY').min(-100).max(100).step(1);
    gui.add(ball, 'positionZ').min(-5000).max(5000).step(1);
    gui.add(ball, 'rotationX').min(-.2).max(.2).step(.001);
    gui.add(ball, 'rotationY').min(-.2).max(.2).step(.001);
    gui.add(ball, 'rotationZ').min(-.2).max(.2).step(.001);

    const canvas = document.querySelector("canvas") as HTMLCanvasElement;
    canvas.width = innerWidth;
    canvas.height = innerHeight;

    const renderer = new THREE.WebGLRenderer({canvas});
    renderer.setClearColor(0x000000);

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(45, innerWidth / innerHeight, 0.1, 5000);
    camera.position.set(0, 0, 1000);

    const light = new THREE.AmbientLight(0xffffff);
    scene.add(light);

    const geometry = new THREE.SphereGeometry(200, 12, 12);
    const material = new THREE.MeshBasicMaterial({color: 0xffffff, vertexColors: THREE.FaceColors});
    const mesh = new THREE.Mesh(geometry, material);

    for (let face of geometry.faces)
        face.color.setRGB(Math.random(), Math.random(), Math.random());

    scene.add(mesh);

    function render() {
        mesh.position.x = ball.positionX;
        mesh.position.y = ball.positionY;
        mesh.position.z = ball.positionZ;

        mesh.rotation.x += ball.rotationX;
        mesh.rotation.y += ball.rotationY;
        mesh.rotation.z += ball.rotationZ;

        renderer.render(scene, camera);
        requestAnimationFrame(render);
    }

    render();
}, true);
