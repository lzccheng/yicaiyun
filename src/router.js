import Vue from "vue";
import Router from "vue-router";
import { indexChild } from "./router/index";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "",
      redirect: "/index"
    },
    {
      path: "/index",
      name: "index",
      component: () => import("@/layout/Content_Nav"),
      children: indexChild
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "*",
      component: () => import("@/views/404.vue")
    }
  ]
});
