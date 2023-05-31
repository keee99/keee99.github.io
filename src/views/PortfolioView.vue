<script setup lang="ts">

import PortfolioCard from '../components/PortfolioCard.vue';
import { onMounted, ref } from "vue";

// Data
import { designCards, codeCards } from '../common/PortfolioItems'


const allItems = designCards.concat(codeCards);

const sortByDate = (arr: any[]) => arr.sort((a, b) => b.date.getTime() - a.date.getTime());

sortByDate(designCards);
sortByDate(codeCards);
sortByDate(allItems);


// TabMenu Items
const activeTab = ref(0);
const items = ref([
    { label: 'Programming' },  // activeTab == 0
    { label: 'Design'}, // activeTab == 1
    { label: 'All' },   // activeTab == 2
]);

const activeHeight = ref("100px");
const heights: string[] = [];

const updateHeight = () => {
  // Find the element with the class "active-container" and set as active height
  activeHeight.value = heights[activeTab.value]

  // const activeContainer = document.querySelector('.active-container');
  // if (activeContainer) activeHeight.value = activeContainer.clientHeight + "px";
}

onMounted(() => {
  // Find all elements with the class "sub-container" and set as heights
  const subContainers = document.querySelectorAll('.sub-container');
  subContainers.forEach((subContainer) => {
    heights.push(subContainer.clientHeight + "px");
  })
  updateHeight();

})


</script>

<template>
  <main>
    <h1 class="section-title neon-text-primary">Portfolio.</h1>
    <TabMenu v-model:activeIndex="activeTab" :model="items" @tab-change="updateHeight"/>
    <div class="main-container">
      <div class="height-container"/>
      <div class="sub-container flex-left shift-right" 
        :class="{'active-container': activeTab === 0, 'inactive-container': activeTab !== 0}" 
        >
        <PortfolioCard v-for="card in codeCards" class=".col-4 portfolio-card" v-bind="card" />
      </div>

      <div class="sub-container flex-left shift-right" 
        :class="{'active-container': activeTab === 1, 'inactive-container': activeTab !== 1}">
        <PortfolioCard v-for="card in designCards" class=".col-4 portfolio-card" v-bind="card" />
      </div>

      <div class="sub-container flex-left shift-right" 
        :class="{'active-container': activeTab === 2, 'inactive-container': activeTab !== 2}" 
        >
        <PortfolioCard v-for="card in allItems" class=".col-4 portfolio-card" v-bind="card" />

      </div>
    </div>

  </main>
</template>

<style scoped>

  .shift-right {
    margin-left: 2%;
    padding: 1%;
  }

  .main-container {
    position: relative;
  }

  .sub-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }

  .height-container {
    height: v-bind(activeHeight);
    width: 100%;
    z-index: -10;
  }


  .active-container {
    z-index: 0;
    visibility: visible;
    opacity: 1;
    transition: visibility 0.3s, opacity 0.3s linear;
  }

  .inactive-container {
    z-index: -5;
    visibility: hidden;
    opacity: 0;
    transition: visibility 0.3s, opacity 0.3s linear;
  }

</style>
