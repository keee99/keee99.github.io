import { createRouter, createWebHistory } from "vue-router";

// Views
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import PorfolioView from "../views/PortfolioView.vue";
import ContactView from "../views/ContactView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    // {
    //   path: "/about",
    //   name: "about",
    //   component: AboutView,
    // },
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
  scrollBehavior(to, from, savedPosition) {
    console.log(to, from)
    // always scroll to top
    return { top: 0 }
  },
});

export default router;
