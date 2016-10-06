// require('three-js');

addEventListener("DOMContentLoaded", () => {

    console.log(`starting...`);

    const canvas = document.querySelector("canvas") as HTMLCanvasElement;

    const renderer = new THREE.WebGLRenderer({canvas});
    renderer.setClearColor(0x000000);

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(45, innerWidth / innerHeight, 0.1, 10000);
    camera.position.set(0, 0, 1000);

    const light = new THREE.AmbientLight(0xffffff);
    scene.add(light);

    const geometry = new THREE.SphereGeometry(200, 12, 12);
    const material = new THREE.MeshBasicMaterial({color: 0x00ff00, wireframe: true});
    const mesh = new THREE.Mesh(geometry, material);

    mesh.position.z = -10000;

    scene.add(mesh);

    const PI500 = Math.PI / 1000;

    function render() {
        mesh.position.z += 10;
        mesh.rotation.y += PI500;
        mesh.rotation.z += PI500;
        mesh.rotation.x += PI500;
        renderer.render(scene, camera);
        requestAnimationFrame(render);
    }

    render();
}, true);
