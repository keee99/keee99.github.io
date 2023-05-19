<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { ref } from "vue";

const navStartItems = ref(["about", "portfolio"]);
const navEndItems = ref(["contact"]);

const capitalize = (str: String) => str.charAt(0).toUpperCase() + str.slice(1);
</script>

<template>
  <main>
    <div class="app-topbar">
        
        <div class="topbar-start">
          <div class="topbar-title"><RouterLink to="/">JJ</RouterLink></div>
          
          <div v-for="item in navStartItems" class="topbar-link">
            <RouterLink :to="{path: item}">{{ capitalize(item) }}</RouterLink>
          </div>

        </div>
        <div class="topbar-end">
          <div v-for="item in navEndItems" class="topbar-link">
            <RouterLink :to="{path: item}">{{ capitalize(item) }}</RouterLink>
          </div>
        </div>
        
    </div>
    
  </main>
</template>


<style scoped>
  .topbar-title {
    font-size: 1.5rem;
    font-weight: bold;
    margin: 0 2rem;
  }
  .topbar-link {
    padding: 2rem;
    height: 100%;
    display: flex;
    align-items: center;
  }

  .topbar-start {
    display: flex;
    align-items: center;
    height: 100%
  }



</style>