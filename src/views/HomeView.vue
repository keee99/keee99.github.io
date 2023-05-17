<script setup lang="ts">

import { useCounterStore } from '@/stores/counter'

// Store test
const counterStore = useCounterStore()

</script>

<template>
  <main>
    <h1>Home Sweet Home.</h1>
    <div>
      <div><RouterLink to="/about">About Me</RouterLink></div>
      <div><RouterLink to="/projects">Projects</RouterLink></div>
      <div><RouterLink to="/designs">Design</RouterLink></div>
      <div><RouterLink to="/contact">Contact</RouterLink></div>
    </div>
  </main>
</template>
