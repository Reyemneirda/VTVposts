import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/Login.vue"),
  },
  {
    path: "/register",
    name: "register",
    component: () => import("@/views/Register.vue"),
  },
  {
    path: "/settings",
    name: "settings",
    component: () => import("@/views/Settings.vue"),
  },
  {
    path: "/editor",
    name: "editor_new",
    component: () => import("@/views/Articles/Create.vue"),
  },
  {
    path: "/editor/:articleSlug",
    name: "editor_edit",
    component: () => import("@/views/Articles/Edit.vue"),
  },
  {
    path: "/articles/:articleSlug",
    name: "article",
    component: () => import("@/views/Articles/Article.vue"),
  },
  {
    path: "/profile/:username",
    name: "profile",
    component: () => import("@/views/Users/Profile.vue"),
  },
  {
    path: "/@:username",
    name: "personnal-page",
    component: () => import("@/views/Users/Page.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
