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
const screenWidth = ref(window.innerWidth);
const activeItem = toRef(props, "active");
const sideBarVisible = ref(false);

const capitalize = (str: String) => str.charAt(0).toUpperCase() + str.slice(1);

const onResize = () => screenWidth.value = window.innerWidth;
const screenThreshold = 767;
window.addEventListener('resize', onResize);

</script>

<template>
  <main>
    <div class="app-topbar" v-if="screenWidth > screenThreshold ">
        
        <div class="topbar-start">
          <a class="topbar-title neon-text-primary" href="#home">Jj</a>
          
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

    <!-- Small screen size topbar -->
    <div class="app-topbar" v-if="screenWidth <= 768 ">
        
        <div class="topbar-start">
          <a class="topbar-title neon-text-primary" href="/#home">Jj</a>
        </div>
        <div class="topbar-end">
          <Sidebar v-model:visible="sideBarVisible" position="full" id="app-sidebar" class="neon-border">
            
            <div class="sidebar-links">
              <a class="topbar-link sidebar-col" 
                :class="{ 'topbar-link-active': activeItem === item, 'topbar-link-inactive': activeItem !== item }"
                v-for="item in navStartItems" :to="{path: item}"
                :href="'#' + item" 
                @click="sideBarVisible=false">
                <div class="topbar-text">
                  {{ capitalize(item) }}
                </div>
              </a>
            </div>

            <div class="sidebar-socials">
              <a class="topbar-link sidebar-col" 
                v-for="item in socials"
                :href='item.link' target="_blank">
                <i class="social-i pi" :class="'pi-' + item.name"></i>
              </a>
            </div>
            
          </Sidebar>
          <i class="pi pi-bars topbar-hamburger neon-text-secondary" @click="sideBarVisible=true" />
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


    font-family: 'Beon', monospace;
}


  .topbar-end, .topbar-start {
    display: flex;
    align-items: stretch;
  }

  
  .topbar-link {
    color: var(--color-text-header);
    font-family: 'Beon', monospace;
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
    background-color: var(--color-secondary-lighter);
    box-shadow: 0 0 5px var(--color-secondary),
                0 0 10px var(--color-secondary),
                0 0 20px var(--color-secondary),
                0 0 40px var(--color-secondary),
                0 0 80px var(--color-secondary),
                0 0 90px var(--color-secondary),
                0 0 100px var(--color-secondary);
    transition: 0.25s;
    transition-timing-function: ease-in-out;
  }

  .topbar-link-inactive {
    transition: 0.15s;
    transition-timing-function: ease-in-out;
  }

  .social-i {
    color: var(--color-secondary);
    transition: 0.15s;
    transition-timing-function: ease-in-out;
  }

  .topbar-link:hover .social-i {
    color: var(--color-secondary-light);
    transition: 0.15s;
    transition-timing-function: ease-in-out;
  }

  /* .topbar-link:hover {
    color: var(--color-text-focus);
    transition: 0.15s;
    transition-timing-function: ease-in-out;
  } */

  .topbar-title:hover {
    color: var(--color-lighter);
    text-shadow: 0 0 5px var(--color-primary-lighter),
                0 0 10px var(--color-primary-lighter),
                0 0 20px var(--color-primary-light),
                0 0 40px var(--color-primary-light),
                0 0 80px var(--color-primary-light),
                0 0 90px var(--color-primary-light),
                0 0 100px var(--color-primary-light);
    transition: 0.15s;
    transition-timing-function: ease-in-out;
  }

  .topbar-link-inactive:hover {
    color: var(--color-text-dark);
    transition: 0.15s;
    transition-timing-function: ease-in-out;
    background-color: var(--color-background-light);
    box-shadow: 0 0 5px var(--color-secondary),
                0 0 10px var(--color-secondary),
                0 0 20px var(--color-secondary);
  }

  .topbar-hamburger {
    color: var(--color-secondary);
    font-size: 1.5rem;
    font-weight: bolder;
    margin: 0 5% 0 0;
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .topbar-hamburger:hover {
    color: white;
    text-shadow: 0 0 5px var(--color-secondary-light),
                0 0 10px var(--color-secondary-light),
                0 0 20px var(--color-secondary-light);
    transition-timing-function: ease-in-out;
    transition: 0.15s;
  }

  .topbar-link.sidebar-col {
    font-size: 1.5rem;
    width: 100%;
    padding-bottom: 1rem;
    display: flex;
    justify-content: center;

  }

  .sidebar-links + .sidebar-socials {
    border-top: 1px solid var(--color-text-dark);
    padding-top: 3rem;
    margin-top: 2rem;
  }
  .sidebar-socials {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }

  .sidebar-socials .topbar-link.sidebar-col {
    font-size: 3rem;
    height: 4.5rem;

  }
  .sidebar-socials .topbar-link.sidebar-col i {
    font-size: 1.5rem;

  }


</style>