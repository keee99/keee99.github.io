import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";
import store from "./stores/store";

// PrimeVue
// Config
import PrimeVue from 'primevue/config';
// Theme
import "primevue/resources/themes/lara-light-indigo/theme.css";     
// Core CSS
import "primevue/resources/primevue.min.css";
// Components
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';
import Card from 'primevue/card';
import Dialog from 'primevue/dialog';
import Galleria from 'primevue/galleria';
import TabMenu from 'primevue/tabmenu';

import "./assets/main.css";

const app = createApp(App);

app.use(router);
app.use(store);
app.use(PrimeVue);

app.component('Accordion', Accordion);
app.component('AccordionTab', AccordionTab);
app.component('Card', Card);
app.component('Dialog', Dialog);
app.component('Galleria', Galleria);
app.component('TabMenu', TabMenu);

app.mount("#app");