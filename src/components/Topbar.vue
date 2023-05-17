<script setup lang="ts">
import Toolbar from 'primevue/toolbar';
</script>

<template>
  <main>
    <Toolbar>
      <template #start>
        <div class="topbarTitle"><RouterLink to="/">JJ</RouterLink></div>
        <div label="Link" link />
        

      </template>

      <template #end>
    
        <div class="topbarLink"><RouterLink to="/about">About</RouterLink></div>
        <div class="topbarLink"><RouterLink to="/portfolio">Projects</RouterLink></div>
        <div class="topbarLink"><RouterLink to="/contact">Contact</RouterLink></div>
      </template>
    </Toolbar>
    
    
  </main>
</template>

<style scoped>
  .topbarTitle {
    font-size: 1.5rem;
    font-weight: bold;
    margin-right: 2rem;
  }
  .topbarLink {
    margin-right: 2rem;
  }

</style>