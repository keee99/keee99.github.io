import { createRouter, createWebHistory } from "vue-router";

// Views
import RootView from "../views/RootView.vue";
import CtdProject from "../threejs/CtdProject.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "JJ's Portfolio",
      component: RootView,
    },
    {
      path: "/ctd-project",
      name: "JJ's CTD Project",
      component: CtdProject,
    },
    // {
    //   path: "/portfolio",
    //   name: "porfolio",
    //   component: PorfolioView,
    // },
    // {
    //   path: "/contact",
    //   name: "contact",
    //   component: ContactView,
    // },
  ],

});

export default router;
