<script setup lang="ts">
import { RouterLink } from "vue-router";
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
    
        <div label="About Me" class="topbarLink"><RouterLink to="/about"></RouterLink></div>
        <div class="topbarLink"><RouterLink to="/projects">Projects</RouterLink></div>
        <div class="topbarLink"><RouterLink to="/designs">Designs</RouterLink></div>
        <div class="topbarLink"><RouterLink to="/contact">Contact</RouterLink></div>
      </template>
    </Toolbar>
    
    
  </main>
</template>