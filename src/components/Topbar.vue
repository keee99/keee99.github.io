<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <main>
    
    <span>
        <span class="topbarTitle"><RouterLink to="/">JJ</RouterLink></span>
        
        <span class="topbarLink"><RouterLink to="/">Home</RouterLink></span>
        <span class="topbarLink"><RouterLink to="/about">About Me</RouterLink></span>
        <span class="topbarLink"><RouterLink to="/projects">Projects</RouterLink></span>
        <span class="topbarLink"><RouterLink to="/designs">Designs</RouterLink></span>
        <span class="topbarLink"><RouterLink to="/contact">Contact</RouterLink></span>
    </span>
  </main>
</template>