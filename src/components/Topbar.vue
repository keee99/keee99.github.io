<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <main>
    
    <span>
        <span class="topbarTitle">JJ</span>
        <span class="topbarLink"><RouterLink to="/about">About Me</RouterLink></span>
        <span class="topbarLink"><RouterLink to="/projects">Projects</RouterLink></span>
        <span class="topbarLink"><RouterLink to="/design">Design</RouterLink></span>
        <span class="topbarLink"><RouterLink to="/contact">Contact</RouterLink></span>
    </span>
  </main>
</template>