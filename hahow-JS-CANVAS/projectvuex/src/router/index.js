import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import PageTest from "@/components/pages/PageTest";
import PageUser from "@/components/pages/PageUser";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "HelloWorld",
      component: HelloWorld
    },
    {
      path: "/test",
      name: "HelloWorld",
      component: HelloWorld
    },
    {
      path: "/PageTest",
      component: PageTest
    },
    {
      path: "/user/id/:num",
      component: PageUser
    },
    {
      path: "/user/:name",
      component: PageUser
    }
  ]
});
