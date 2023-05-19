<script setup lang="ts">
import Dialog from 'primevue/dialog';
import Button from 'primevue/button';
import { ref } from "vue";

const visible = ref(false);

</script>

<template>
  <main>
    <h1>Portfolio.</h1>
    <div>
        <RouterLink to="/">Back</RouterLink>
    </div>
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quibusdam ut corrupti voluptatem saepe quam iusto unde laborum! Magnam inventore dolores voluptatem rem accusamus necessitatibus a natus quam sed deserunt?
    </div>
    <div>
      
          <div class="card flex justify-content-center">
              <button label="Show" icon="pi pi-external-link" @click="visible = true">button</button>
              <Dialog v-model:visible="visible" modal header="Header" :style="{ width: '50vw' }">
                  <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
              </Dialog>
          </div>


    </div>
  </main>
</template>
