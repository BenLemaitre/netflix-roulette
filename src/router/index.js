import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../components/home.vue";

import Signin from "../components/auth/signin.vue";
import Signup from "../components/auth/signup.vue";
import Profile from "../components/auth/profile.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/signin",
    name: "signin",
    component: Signin,
  },
  {
    path: "/signup",
    name: "signup",
    component: Signup,
  },
  {
    path: "/profile",
    name: "profile",
    component: Profile,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
