<template>
  <div class="login text-center">
    <h2>Регистрация</h2>
    <form @submit.prevent="register">
      <input type="email" v-model="email" placeholder="Email" />
      <input type="password" v-model="password" placeholder="Пароль" />
      <button type="submit" class="button-form">Зарегистрироваться</button>
    </form>
    <div class="auth-links">
      Уже есть аккаунт?
      <router-link :to="{ name: 'login' }">Войти</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "register",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    register() {
      const user = {
        email: this.email,
        password: this.password
      };

      this.$store.dispatch("registerUser", user);
    }
  }
};
</script>

<style scoped></style>
