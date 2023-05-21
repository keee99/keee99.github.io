<script setup lang="ts">

import { useCounterStore } from '@/stores/counter'

// Store Test
const counterStore = useCounterStore()

</script>

<template>
  <main>
    <h1>About Me.</h1>
    <div>
      <div id="profilePictureDiv">
        <!-- <img src="../assets/images/profile.png" /> -->
      </div>
      <p>
        ipsum dolor sit amet consectetur adipisicing elit. Vel quibusdam ut corrupti voluptatem saepe quam iusto unde laborum! Magnam inventore dolores voluptatem rem accusamus necessitatibus a natus quam sed deserunt?
      </p>
      <button @click="counterStore.increment()">click me</button>
    </div>
  </main>
</template>
