<script setup lang="ts">

import { ref, onMounted } from 'vue';

import type { BGProps } from './BGSceneManager';
import { BGSceneManager } from './BGSceneManager';
import { bgSceneConfig } from './BGSceneConfig';

const props: BGProps = defineProps({
    homeY: {
        type: Number,
        required: true
    },
    aboutY: {
        type: Number,
        required: true
    },
    portfolioY: {
        type: Number,
        required: true
    }

})


const bgscene = ref<HTMLCanvasElement | null>(null);
onMounted(() => {
    let canvas: HTMLCanvasElement | null | undefined = bgscene.value;
    if (!canvas) throw new Error("No canvas found");

    const sceneManager = new BGSceneManager(canvas, bgSceneConfig, props);

    function animate() {
        sceneManager.update();
        requestAnimationFrame(animate);  
    }
    animate();
});



</script>


<template>
  <main>
    <div>
        <canvas ref="bgscene" class="webgl"></canvas>
    </div>
  </main>
</template>


