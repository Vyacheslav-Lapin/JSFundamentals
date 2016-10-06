// require('three-js');

addEventListener("DOMContentLoaded", () => {

    console.log(`starting...`);

    const canvas = document.querySelector("canvas") as HTMLCanvasElement;
    // canvas.width = innerWidth;
    // canvas.height = innerHeight;

    const renderer = new THREE.WebGLRenderer({canvas});
    renderer.setClearColor(0x000000);

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(45, innerWidth / innerHeight, 0.1, 5000);
    camera.position.set(0, 0, 1000);

    const light = new THREE.AmbientLight(0xffffff);
    scene.add(light);

    const geometry = new THREE.PlaneGeometry(300, 300, 12, 12);
    const material = new THREE.MeshBasicMaterial({color: 0x00ff00, wireframe: true});
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    renderer.render(scene, camera);
}, true);
