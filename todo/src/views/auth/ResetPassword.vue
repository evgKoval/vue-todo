<template>
  <div class="login text-center">
    <h2>Восстановить пароль</h2>
    <form @submit.prevent="login">
      <input type="text" v-model="email" placeholder="Email" />
      <button type="submit" class="button-form">Восстановить</button>
    </form>
    <div class="auth-links">
      <router-link :to="{ name: 'login' }">Назад</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    login() {
      alert("Login");
    }
  }
};
</script>

<style scoped>
.auth-links {
  margin-top: 1.5rem;
  font-size: 15px;
}
</style>
