<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { ref, toRef } from "vue";

const props = defineProps({
  active: {
    type: String,
    required: true
  }
})

const navStartItems = ref(["about", "portfolio"]);
const navEndItems = ref(["contact"]);

const activeItem = toRef(props, "active")


const capitalize = (str: String) => str.charAt(0).toUpperCase() + str.slice(1);
</script>

<template>
  <main>
    <div class="app-topbar">
        
        <div class="topbar-start">
          <RouterLink class="topbar-title" to="/">JJ</RouterLink>
          
          <a class="topbar-link" 
            :class="{ 'topbar-link-active': activeItem === item, 'topbar-link-inactive': activeItem !== item }"
            v-for="item in navStartItems" :to="{path: item}"
            :href="'#' + item">
            {{ capitalize(item) }}
          </a>

        </div>
        <div class="topbar-end">
          <a class="topbar-link" 
            :class="{ 'topbar-link-active': activeItem === item, 'topbar-link-inactive': activeItem !== item }"
            v-for="item in navEndItems" :to="{path: item}"
            :href="'#' + item">
            {{ capitalize(item) }}
          </a>
        </div>
        
    </div>
    
  </main>
</template>


<style scoped>

  @import '../assets/base.css';

  .topbar-title {
    font-size: 1.5rem;
    font-weight: bold;
    margin: 0 2rem;
    display: flex;
    align-items: center;
  }

  .topbar-end, .topbar-start {
    display: flex;
    align-items: stretch;
  }

  
  .topbar-link {
    padding: 0 1rem;
    display: flex;
    align-items: center;
  }

  .topbar-link-active {
    background-color: #39487a;
    color: #e4e4e4;
    transition: 0.25s;
    transition-timing-function: ease-in-out;
  }

  .topbar-link-inactive {
    transition: 0.25s;
    transition-timing-function: ease-in-out;
  }
  
  .topbar-link-inactive:hover {
    background-color: #68749941;
    transition: 0.3s;
    transition-timing-function: ease-in-out;
  }





</style>