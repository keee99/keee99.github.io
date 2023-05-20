<script setup lang="ts">

import Card from 'primevue/card';

import Dialog from 'primevue/dialog';
import { ref } from "vue";

const props = defineProps({
  title: String,
  subtitle: String,
  desc: String,
  img: String
})

const visible = ref(false);



</script>

<template>

<Card style="width: 25em">
    <!-- <template #header>
        <img class="card-img" alt="user header" src="../assets/images/profile.png" />
    </template> -->
    <template #title> 
        <div class="card-title" v-if="props.title">{{ props.title }}</div>
    </template>
    <template #subtitle>  
        <div class="card-subtitle" v-if="props.subtitle">{{ props.subtitle }}</div>
    </template>
    <template #content>
        <div class="card-desc" >
            <p v-if="props.desc">{{ props.desc }}</p>    
        </div>
    </template>
    <template #footer>
        
        <div class="card flex justify-content-center">
            <button label="Show" icon="pi pi-external-link" @click="visible = true">button</button>
            <Dialog v-model:visible="visible" modal header="Header" :style="{ width: '50vw' }">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </Dialog>
          </div>
    </template>
</Card>

</template>

<style scoped>
</style>
