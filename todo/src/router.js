import Vue from "vue";
import Router from "vue-router";
import store from "@/store";

import Todo from "./views/Todo.vue";
import Login from "./views/auth/Login.vue";
import Register from "./views/auth/Register.vue";
import ResetPassword from "./views/auth/ResetPassword.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "todo",
      component: Todo,
      beforeEnter: authGuard
    },
    {
      path: "/login",
      name: "login",
      component: Login,
      beforeEnter: userGuard
    },
    {
      path: "/register",
      name: "register",
      component: Register,
      beforeEnter: userGuard
    },
    {
      path: "/reset",
      name: "reset",
      component: ResetPassword,
      beforeEnter: userGuard
    }
  ]
});

function authGuard(to, from, next) {
  store.dispatch("initAuth").then(user => {
    user ? next() : next("/login");
  });
}

function userGuard(to, from, next) {
  store.dispatch("initAuth").then(user => {
    !user ? next() : next("/");
  });
}
