<script setup lang="ts">
import { useRoute } from "vue-router";
import { onMounted, computed, ref } from "vue";

import CtdProject from "./threejs/CtdProject.vue";
import BGScene from "./threejs/BGScene.vue";
import Topbar from "./components/Topbar.vue";

import HomeView from "./views/HomeView.vue";
import AboutView from "./views/AboutView.vue";
import ContactView from "./views/ContactView.vue";
import PortfolioView from "./views/PortfolioView.vue";

let sectionObserver: IntersectionObserver;
const route = useRoute();

const activeSection = ref("")

// https://stackoverflow.com/questions/61645225/vue-router-change-anchor-in-route-on-scroll
function sectionObserverHandler (entries: IntersectionObserverEntry[]) {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      const sectionId = entry.target.id
    }
  }

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

const addHashToLocation =(sectionName: string) => history.pushState({}, "", route.path + '#' + sectionName)

onMounted(() => {
  observeSections();
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
      <div class="app-section" id="about"><AboutView/></div>
      <div class="app-section" id="portfolio"><PortfolioView/></div>
      <div class="app-section"  id="contact"><ContactView/></div>
      
      <!-- <BGScene class="bg"/> -->
    </div>

    <footer>
      
    </footer>
    

  </body>
</template>

<style>
  .bg {
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    background-color: #000;
  }


</style>








<!-- <script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="@/assets/logo.svg"
      width="125"
      height="125"
    />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style> -->
