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
const navEndItems = ref([]);

const activeItem = toRef(props, "active")


const capitalize = (str: String) => str.charAt(0).toUpperCase() + str.slice(1);
</script>

<template>
  <main>
    <div class="app-topbar">
        
        <div class="topbar-start">
          <a class="topbar-title neon-text-primary" href="/#home">J  j</a>
          
          <a class="topbar-link" 
            :class="{ 'topbar-link-active': activeItem === item, 'topbar-link-inactive': activeItem !== item }"
            v-for="item in navStartItems" :to="{path: item}"
            :href="'#' + item">
            <div>
              {{ capitalize(item) }}
            </div>
          </a>

        </div>
        <div class="topbar-end">
          <a class="topbar-link" 
            :class="{ 
              'topbar-link-active': activeItem === item, 
              'topbar-link-inactive': activeItem !== item 
            }"
            v-for="item in navEndItems" :to="{path: item}"
            :href="'#' + item">
            <div>
              {{ capitalize(item) }}
            </div>
          </a>
        </div>
        
    </div>
    
  </main>
</template>


<style scoped>

  @import '../assets/base.css';

  .topbar-title {
    font-size: 1.5rem;
    font-weight: bolder;
    margin: 0 5rem;
    display: flex;
    align-items: center;


    font-family: 'Beon';
}


  .topbar-end, .topbar-start {
    display: flex;
    align-items: stretch;
  }

  
  .topbar-link {
    font-family: 'Beon', 'sans-serif';
    padding: 0 1rem;
    display: flex;
    align-items: center;
  }

  .topbar-link-active {

    transition: 0.25s;
    transition-timing-function: ease-in-out;
  }

  .topbar-link-active div::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #d7ffd7;
    box-shadow: 0 0 5px #00FF00,
                0 0 10px #00FF00,
                0 0 20px #00FF00,
                0 0 40px #00FF00,
                0 0 80px #00FF00,
                0 0 90px #00FF00,
                0 0 100px #00FF00;
    transition: 0.25s;
    transition-timing-function: ease-in-out;
  }

  .topbar-link-inactive {
    transition: 0.15s;
    transition-timing-function: ease-in-out;
  }
  
  .topbar-link-inactive:hover {
    background-color: #959fbb69;
    transition: 0.15s;
    transition-timing-function: ease-in-out;
  }





</style>