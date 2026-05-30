import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { MeshoptDecoder } from 'three/examples/jsm/libs/meshopt_decoder.module.js';

export function initHeroVisual(container) {
  const width = container.clientWidth;
  const height = container.clientHeight || 400;

  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 100);
  camera.position.set(4.0, 2.8, 5.0);
  camera.lookAt(0, 1.8, 0);

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.2;
  container.appendChild(renderer.domElement);

  const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
  scene.add(ambientLight);

  const mainLight = new THREE.DirectionalLight(0xffffff, 1.8);
  mainLight.position.set(4, 5, 4);
  scene.add(mainLight);

  const rimLight = new THREE.DirectionalLight(0x2563EB, 0.5);
  rimLight.position.set(-3, 1, -3);
  scene.add(rimLight);

  const fillLight = new THREE.DirectionalLight(0xF8FAFC, 0.5);
  fillLight.position.set(-2, 0.5, 3);
  scene.add(fillLight);

  const group = new THREE.Group();

  const loader = new GLTFLoader();
  loader.setMeshoptDecoder(MeshoptDecoder);
  loader.load(
    '/models/virtual-assistant.glb',
    (gltf) => {
      const model = gltf.scene;
      model.scale.set(3.8, 3.8, 3.8);
      model.position.set(0, 1.2, 0);
      group.add(model);
    },
    undefined,
    (err) => {
      console.error('Failed to load 3D model:', err);
    }
  );

  scene.add(group);

  const glowGroup = new THREE.Group();
  const glowParticles = new THREE.BufferGeometry();
  const particleCount = 40;
  const positions = new Float32Array(particleCount * 3);
  for (let i = 0; i < particleCount * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 5;
  }
  glowParticles.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  const particleMat = new THREE.PointsMaterial({
    color: 0x2563EB,
    size: 0.025,
    transparent: true,
    opacity: 0.3,
    blending: THREE.AdditiveBlending,
  });
  const particles = new THREE.Points(glowParticles, particleMat);
  glowGroup.add(particles);
  scene.add(glowGroup);

  let isDragging = false;
  let prevMouse = { x: 0, y: 0 };
  let targetRotY = 0;
  let targetRotX = 0;
  let currentRotY = 0;
  let currentRotX = 0;
  let autoRotate = true;

  const onPointerDown = (e) => {
    isDragging = true;
    autoRotate = false;
    const pos = e.touches ? e.touches[0] : e;
    prevMouse = { x: pos.clientX, y: pos.clientY };
  };

  const onPointerMove = (e) => {
    if (!isDragging) return;
    const pos = e.touches ? e.touches[0] : e;
    const dx = pos.clientX - prevMouse.x;
    const dy = pos.clientY - prevMouse.y;
    targetRotY += dx * 0.01;
    targetRotX += dy * 0.005;
    targetRotX = Math.max(-0.8, Math.min(0.8, targetRotX));
    prevMouse = { x: pos.clientX, y: pos.clientY };
  };

  const onPointerUp = () => {
    isDragging = false;
    setTimeout(() => { autoRotate = true; }, 2000);
  };

  renderer.domElement.addEventListener('mousedown', onPointerDown);
  window.addEventListener('mousemove', onPointerMove);
  window.addEventListener('mouseup', onPointerUp);
  renderer.domElement.addEventListener('touchstart', onPointerDown, { passive: true });
  window.addEventListener('touchmove', onPointerMove, { passive: true });
  window.addEventListener('touchend', onPointerUp);

  function animate() {
    requestAnimationFrame(animate);

    if (autoRotate) {
      targetRotY += 0.004;
      targetRotX = Math.sin(Date.now() * 0.0003) * 0.04;
    }

    currentRotY += (targetRotY - currentRotY) * 0.08;
    currentRotX += (targetRotX - currentRotX) * 0.08;

    group.rotation.y = currentRotY;
    group.rotation.x = currentRotX;

    const floatY = Math.sin(Date.now() * 0.001) * 0.03;
    group.position.y = floatY;

    particles.rotation.y += 0.002;

    renderer.render(scene, camera);
  }

  animate();

  const resizeObserver = new ResizeObserver(() => {
    const w = container.clientWidth;
    const h = container.clientHeight || 400;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
  });
  resizeObserver.observe(container);
}
