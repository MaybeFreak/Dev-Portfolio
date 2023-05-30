import { useEffect, useState } from "react";
import * as THREE from "three";
import { EffectComposer } from "three/addons/postprocessing/EffectComposer.js";
import { RenderPass } from "three/addons/postprocessing/RenderPass.js";
import { ShaderPass } from "three/addons/postprocessing/ShaderPass.js";
import { RGBShiftShader } from "three/addons/shaders/RGBShiftShader.js";
import { GammaCorrectionShader } from "three/addons/shaders/GammaCorrectionShader.js";
import { FilmPass } from "three/addons/postprocessing/FilmPass.js";

function ThreeJSArea({ id = "" }) {
  const [mount, setMount] = useState(null);

  useEffect(() => {
    if (mount) ThreeCode();
  }, [mount]);

  const ThreeCode = () => {
    let width = mount.clientWidth;
    let height = mount.clientHeight;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x000000, 0.05);

    const renderer = new THREE.WebGL1Renderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    mount.appendChild(renderer.domElement);

    const camera = new THREE.PerspectiveCamera(100, width / height, 0.1, 1000);
    camera.position.z = 40;

    const geometry = new THREE.TorusKnotGeometry(15, 5, 100, 10);
    const material = new THREE.MeshBasicMaterial({
      wireframe: true,
      color: 0xffffff,
    });
    const placeholderKnot = new THREE.Mesh(geometry, material);
    scene.add(placeholderKnot);

    const handleResize = () => {
      width = mount.clientWidth;
      height = mount.clientHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      renderer.setSize(width, height);
    };

    window.addEventListener("resize", handleResize);

    // // Post Processing

    // const composer = new EffectComposer(renderer);
    // composer.addPass(new RenderPass(scene, camera));

    // const effectFilm = new FilmPass(0.5, 1, 500, true);
    // composer.addPass(effectFilm);

    // const rgbshift = new ShaderPass(RGBShiftShader);
    // rgbshift.uniforms["amount"].value = 0.003;
    // composer.addPass(rgbshift);

    // const outputPass = new ShaderPass(GammaCorrectionShader);
    // composer.addPass(outputPass);

    const eachFrame = () => {
      // composer.render();
      renderer.render(scene, camera);

      placeholderKnot.rotation.x += 0.0025;
      placeholderKnot.rotation.y += 0.01;
      placeholderKnot.rotation.z += 0.0025;
    };

    // RENDER CALL FUNCTION
    let clock = new THREE.Clock();
    let delta = 0;
    let maxFramerate = 60;
    let interval = 1 / maxFramerate;

    const update = () => {
      requestAnimationFrame(update);

      delta += clock.getDelta();

      if (delta > interval) {
        eachFrame();
        delta = delta % interval;
      }
    };
    update();
  };

  return (
    <div
      id={id}
      ref={(mount) => {
        setMount(mount);
      }}
    />
  );
}

export default ThreeJSArea;
