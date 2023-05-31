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
    <div>
        <canvas ref="ctdProject" class="webgl"></canvas>
    </div>
  </main>
</template>
