<script setup lang="ts">
import { useRoute } from "vue-router";
import { onMounted, computed, ref } from "vue";

import BGScene from "../threejs/BGScene.vue";
import Topbar from "../components/Topbar.vue";

import HomeView from "./HomeView.vue";
import AboutView from "./AboutView.vue";
import PortfolioView from "./PortfolioView.vue";

let sectionObserver: IntersectionObserver;
const route = useRoute();

const activeSection = ref("")


function resizeBackground() {
  const bgElements = document.querySelectorAll<HTMLElement>(".bg");
  const windowHeight = window.innerHeight + 60;

  bgElements.forEach((element) => {
    element.style.height = `${windowHeight}px`;
  })
}

// INTERSECTION OBSERVER ================================

// https://stackoverflow.com/questions/61645225/vue-router-change-anchor-in-route-on-scroll
function sectionObserverHandler(entries: IntersectionObserverEntry[]) {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      const sectionId = entry.target.id
      if (route.name === null) return;
      // addHashToLocation(sectionId)
      activeSection.value = sectionId;
    }
  }
}

function observeSections() {
  if (sectionObserver) {
    try {
      sectionObserver.disconnect()
    } catch (error) { }
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
  window.addEventListener('resize', updateScrollDistances);
  // window.addEventListener('resize', resizeBackground);
})


</script>

<template>
  <main>
    <header>
      <Topbar :active="activeSection" />
    </header>

    <body class="">
      <div class="app-body">
        <!-- <router-view v-slot="{ Component }">
            <transition>
            <component :is="Component"></component>
            </transition>
        </router-view> -->

        <div class="app-section" id="home">
          <HomeView />
        </div>
        <div class="app-section-break" />
        <div class="app-section" id="about">
          <AboutView />
        </div>
        <div class="app-section-break" />
        <div class="app-section" id="portfolio">
          <PortfolioView />
        </div>
        <div class="app-section-break" />
        <!-- <div class="app-section"  id="contact"><ContactView/></div> -->

      </div>

      <footer>

      </footer>


    </body>
    <div class="bg-wrapper">
      <BGScene class="bg" :homeY="homeY" :aboutY="aboutY" :portfolioY="portfolioY" />
    </div>

    <ScrollTop />
  </main>
</template>
