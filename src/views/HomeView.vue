<script setup lang="ts">

import { useCounterStore } from '@/stores/counter'

// Store test
const counterStore = useCounterStore()

</script>

<template>
  <main>
    <div class="flex-left">
      <!-- <div class="col-2">

        <div class="title-card">
          <div class="title-header">
            <h1>Jia Jun.</h1>
          </div>
          <div class="title-desc">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum quasi consequatur labore provident repellendus eius ipsum culpa odio, id voluptates vitae reprehenderit eum. Culpa velit quae, aliquam dignissimos exercitationem sunt!</p>
          </div>
        </div>
        
      </div> -->
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