<script setup lang="ts">
</script>

<template>
  <router-view v-slot="{ Component }">
    <transition>
      <component :is="Component"></component>
    </transition>
  </router-view>
</template>

<style>
@import './assets/base.css';

.bg-wrapper {
  position: absolute;
  height: 100lvh;
}

.bg {
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100lvh;
  /* background-color: var(--color-background); */
  transform: scale(1.0);
}
</style>
