import Vue from "vue";
import Router from "vue-router";
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
      component: Todo
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/register",
      name: "register",
      component: Register
    },
    {
      path: "/reset",
      name: "reset",
      component: ResetPassword
    }
  ]
});
