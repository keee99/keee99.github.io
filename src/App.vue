<script setup lang="ts">
import { useRoute } from "vue-router";
import { onMounted, computed, ref } from "vue";

import CtdProject from "./threejs/CtdProject.vue";
import BGScene from "./threejs/BGScene.vue";
import Topbar from "./components/Topbar.vue";

import HomeView from "./views/HomeView.vue";
import AboutView from "./views/AboutView.vue";
import PortfolioView from "./views/PortfolioView.vue";

let sectionObserver: IntersectionObserver;
const route = useRoute();

const activeSection = ref("")


// INTERSECTION OBSERVER ================================

// https://stackoverflow.com/questions/61645225/vue-router-change-anchor-in-route-on-scroll
function sectionObserverHandler (entries: IntersectionObserverEntry[]) {
  for (const entry of entries) {
    if (entry.isIntersecting) {
        const sectionId = entry.target.id
        if (route.name === null) return;
        addHashToLocation(sectionId)
        activeSection.value = sectionId;
    }
  }
}

function observeSections() {
  if (sectionObserver) {
    try { sectionObserver.disconnect()
    } catch (error) {}
  }
  
  const options = {
    rootMargin: '0px 0px',
    threshold: 0
  }

  sectionObserver = new IntersectionObserver(sectionObserverHandler, options)
  const sections = document.querySelectorAll('.app-section')
  sections.forEach(section => sectionObserver.observe(section))
}

const addHashToLocation = (sectionName: string) => history.pushState({}, "", route.path + '#' + sectionName)



// SCROLL TRACKER ================================



const homeY = ref(0);
const aboutY = ref(0);
const portfolioY = ref(0);

// Get the distance from the top of the page to each section
const updateScrollDistances = () => {
  const home = document.getElementById('home')?.offsetTop
  const about = document.getElementById('about')?.offsetTop
  const portfolio = document.getElementById('portfolio')?.offsetTop

  homeY.value = home ? home : 0;
  aboutY.value = about ? about : 0;
  portfolioY.value = portfolio ? portfolio : 0;
}



onMounted(() => {
  updateScrollDistances();
  observeSections();
  window.addEventListener('resize', updateScrollDistances)
})

</script>

<template>
  <header>
    <Topbar :active="activeSection"/>
  </header>
  
  <body> 
    <div class="app-body">
      <!-- <router-view v-slot="{ Component }">
        <transition>
          <component :is="Component"></component>
        </transition>
      </router-view> -->

      <div class="app-section" id="home" ><HomeView/></div>
      <div class="app-section-break" />
      <div class="app-section" id="about"><AboutView/></div>
      <div class="app-section-break" />
      <div class="app-section" id="portfolio"><PortfolioView/></div>
      <div class="app-section-break" />
      <!-- <div class="app-section"  id="contact"><ContactView/></div> -->
      
      <BGScene 
        class="bg" 
        :homeY="homeY" 
        :aboutY="aboutY"
        :portfolioY="portfolioY"
      />

      <ScrollTop />


    </div>

    <footer>
      
    </footer>
    

  </body>
</template>

<style>

  @import './assets/base.css';

  .bg {
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    background-color: var(--color-background);
  }


</style>
