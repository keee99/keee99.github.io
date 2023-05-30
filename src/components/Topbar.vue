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
const socials = ref([
  {name: "github", link: "https://github.com/keee99"}, 
  {name: "linkedin", link: "https://www.linkedin.com/in/jayjaykoh/"}, 
  {name: "instagram", link: "https://www.instagram.com/jayjay_koh/"}, 
  {name: "envelope", link: "mailto:kohjim99@gmail.com"},
]);


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
            <div class="topbar-text">
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
            <div class="topbar-text">
              {{ capitalize(item) }}
            </div>
          </a>

          <a class="topbar-link" 
            v-for="item in socials"
            :href='item.link' target="_blank">
            <i class="social-i pi" :class="'pi-' + item.name"></i>
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
    margin: 0 10% 0 5%;
    display: flex;
    align-items: center;

    min-width: fit-content;


    font-family: 'Beon';
}


  .topbar-end, .topbar-start {
    display: flex;
    align-items: stretch;
  }

  
  .topbar-link {
    color: #ff88aa;
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

  .social-i {
    color: #00FF00;
    transition: 0.15s;
    transition-timing-function: ease-in-out;
  }

  .topbar-link:hover .social-i {
    color: #d0ffd0;
    transition: 0.15s;
    transition-timing-function: ease-in-out;
  }

  .topbar-link:hover {
    color: #d0ffd0;
    transition: 0.15s;
    transition-timing-function: ease-in-out;
  }

  .topbar-title:hover {
    color: rgb(255, 255, 255);
    text-shadow: 0 0 5px #ffe8d5,
                0 0 10px #ffe8d5,
                0 0 20px #ffa14e,
                0 0 40px #ffa14e,
                0 0 80px #ffa32b,
                0 0 90px #ffa32b,
                0 0 100px #ffa32b;
    transition: 0.15s;
    transition-timing-function: ease-in-out;
  }

  .topbar-link-inactive:hover {
    background-color: #959fbb69;
    transition: 0.15s;
    transition-timing-function: ease-in-out;
  }



</style>