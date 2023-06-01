<script setup lang="ts">

// Vue imports
import { ref, onMounted } from 'vue';

import { CTDSceneManager } from './CTDSceneManager';
import { ctdSceneConfig } from './CTDSceneConfig';

// Canvas
const ctdProject = ref<HTMLCanvasElement | null>(null);

onMounted(() => {
    let canvas: HTMLCanvasElement | null | undefined = ctdProject.value;
    if (!canvas) throw new Error("No canvas found");

    const sceneManager = new CTDSceneManager(canvas, ctdSceneConfig);
    
    // ANIMATIONS ==========================
    const animate = () => {
        sceneManager.update();
        window.requestAnimationFrame(animate)
    }
    animate()

});



</script>

<template>
  <main>
    <div class="main-container">
        <div class="canvas-header">
          <div>
            <h1>CTD Generative Design Project</h1>
            <h2>Koh Jia Jun, 2023</h2>
            <p>Click and drag to orbit, scroll to zoom.</p>
          </div>
        </div>
        <canvas ref="ctdProject" class="webgl"></canvas>
    </div>
  </main>
</template>



<style scoped>

.main-container {
  position: relative;
}

.canvas-header {
  padding: 1rem;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  z-index: 1;
  display: flex;
  justify-content: left;
}

h1 {
  font-family: Beon, monospace;
}

h2 {
  font-family: monospace;
}

</style>