import Vue from "vue";
import Router from "vue-router";
import CreateItem from "./views/CreateItem.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "CreateItem",
      component: CreateItem
    },
    {
      path: "/collectCreate",
      name: "collectCreate",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/collectCreate.vue")
    },
    {
      path: "/collectEdit",
      name: "collectEdit",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/collectEdit.vue")
    }
  ]
});
