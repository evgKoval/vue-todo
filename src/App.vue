<template>
  <div id="app">
    <nav class="navbar">
      <ul class="flex">
        <template v-if="isLogged">
          <li>
            <router-link :to="{ name: 'todo' }">Главная</router-link>
          </li>
          <li>
            <a @click="logout">Выйти</a>
          </li>
        </template>
        <template v-else>
          <li>
            <router-link :to="{ name: 'login' }">Войти</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'register' }">reg</router-link>
          </li>
        </template>
      </ul>
    </nav>
    <div class="logo">
      <img src="@/assets/logo.jpg" alt="Logo ToDo" width="120" height="auto" />
    </div>
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    isLogged() {
      return this.$store.getters.checkUser;
    }
  },
  methods: {
    logout() {
      this.$store.dispatch("logoutUser").then(() => {
        this.$router.push("/login");
      });
    }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Roboto+Condensed");

* {
  box-sizing: border-box;
  transition: 0.15s;
}

body {
  background: url("assets/bg.jpg");
  background-size: 1920px auto;
  background-position: 10%;
}

#app,
button,
input {
  font-family: "Roboto Condensed", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#app {
  color: #2c3e50;
  max-width: 720px;
  margin: auto;
  padding-top: 1.5rem;
  font-size: 21px;
  background: white;
  padding: 36px;
  min-height: 600px;
  border-radius: 6px;
  box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.06);
  margin-top: 3rem;
}

.navbar ul {
  justify-content: center;
  padding: 0;
  margin-top: 0;
}

.navbar li {
  padding: 0 15px;
}

.navbar a {
  color: #2c3e50;
}

li {
  list-style: none;
}

.navbar .router-link-active {
  color: #2ecc71;
  cursor: default;
}

.router-link-active:hover {
  text-decoration: none;
}

.logo {
  font-size: 36px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 2rem;
}

.flex {
  display: flex;
}

.align-items-center {
  align-items: center;
}

.justify-center {
  justify-content: center;
}

.text-center {
  text-align: center;
}

hr {
  border-top: 1px solid lightgray;
}

input {
  width: 100%;
  font-size: 18px;
  border: 1px solid lightgray;
  border-radius: 6px;
  outline: none;
  margin-bottom: 1rem;
  padding: 12px 18px;
}

input:focus {
  box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.06);
  border-color: #3498db;
}

button {
  border: none;
  outline: none;
  cursor: pointer;
}

a {
  text-decoration: none;
  color: #3498db;
  cursor: pointer;
}

a:hover {
  text-decoration: underline;
}

.button-form {
  width: 100%;
  font-size: 18px;
  padding: 13px 0;
  border-radius: 6px;
  color: white;
  background-color: #2ecc71;
  font-weight: 700;
}

.button-form:hover {
  background-color: #22b660;
}

.auth-links {
  margin-top: 1.5rem;
  font-size: 15px;
}

.message {
  padding: 0 30px;
  margin-top: 1rem;
}

.error {
  color: orangered;
}

.notification {
  color: #2ecc71;
}

.lds-ring {
  display: block;
  margin: auto;
  position: relative;
  width: 64px;
  height: 64px;
}

.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 51px;
  height: 51px;
  margin: 6px;
  border: 3px solid lightgray;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: lightgray transparent transparent transparent;
}

.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}

.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}

.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}

@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.fade-enter {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity 0.15s ease;
}

.fade-leave-active {
  transition: opacity 0.15s ease;
  opacity: 0;
}

.vaditaion {
  color: orangered;
  font-size: 15px;
  text-align: left;
  margin-top: -0.5rem;
  margin-bottom: 1rem;
}

@media screen and (max-width: 1199px) {
  #app {
    margin-top: 0;
  }
}
</style>
