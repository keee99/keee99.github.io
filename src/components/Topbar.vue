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
          <RouterLink class="topbar-title" to="/">JJ</RouterLink>
          
          <RouterLink class="topbar-link" v-for="item in navStartItems" :to="{path: item}">
            {{ capitalize(item) }}
          </RouterLink>

        </div>
        <div class="topbar-end">
          <RouterLink class="topbar-link" v-for="item in navEndItems" :to="{path: item}">
            {{ capitalize(item) }}
          </RouterLink>
        </div>
        
    </div>
    
  </main>
</template>


<style scoped>
  .topbar-title {
    font-size: 1.5rem;
    font-weight: bold;
    margin: 0 2rem;
    display: flex;
    align-items: center;
  }
  .topbar-link {
    padding: 0 1rem;
    display: flex;
    align-items: center;
  }

  .topbar-end, .topbar-start {
    display: flex;
    align-items: stretch;
  }

  /* On hover over a topbar-link, change color */
  .topbar-link:hover {
    background-color: #39487a;
    color: #e4e4e4;
    transition: 0.3s;
    transition-timing-function: ease-in-out;
  }




</style>