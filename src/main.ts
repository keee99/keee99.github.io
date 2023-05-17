import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";
import store from "./stores/store";

import "./assets/main.css";

// PrimeVue
// Config
import PrimeVue from 'primevue/config';
// // Theme
// import "primevue/resources/themes/lara-light-indigo/theme.css";     
// // Core CSS
// import "primevue/resources/primevue.min.css";

const app = createApp(App);

app.use(router);
app.use(store);
app.use(PrimeVue);

app.mount("#app");
