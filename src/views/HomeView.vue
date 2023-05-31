<script setup lang="ts">

import { useCounterStore } from '@/stores/counter'
import CtdProject from '@/threejs/CtdProject.vue';

// Store test
const counterStore = useCounterStore()

</script>

<template>
  <main>
    <div class="flex-left">
      <div class="col-2">
                
      </div>
    </div>
    
    
  </main>
</template>

<style>

.title-card {
  padding: 2rem;
}

.title-header {
  font-size: 3rem;
}

.title-desc {
  padding-right: 5%;
  text-align: justify;
}

</style>