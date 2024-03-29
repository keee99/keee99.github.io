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
// Icons
import 'primeicons/primeicons.css';
// Components
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';
import Card from 'primevue/card';
import Chip from 'primevue/chip';
import Dialog from 'primevue/dialog';
import Galleria from 'primevue/galleria';
import PanelMenu from 'primevue/panelmenu';
import ScrollTop from 'primevue/scrolltop';
import Sidebar from 'primevue/sidebar';
import TabMenu from 'primevue/tabmenu';

import "./assets/main.css";

const app = createApp(App);

app.use(router);
app.use(store);
app.use(PrimeVue);

app.component('Accordion', Accordion);
app.component('AccordionTab', AccordionTab);
app.component('Card', Card);
app.component('Chip', Chip);
app.component('Dialog', Dialog);
app.component('Galleria', Galleria);
app.component('PanelMenu', PanelMenu);
app.component('ScrollTop', ScrollTop);
app.component('Sidebar', Sidebar);
app.component('TabMenu', TabMenu);


app.mount("#app");