<template>
  <div class="login text-center">
    <h2>Вход</h2>
    <form @submit.prevent="login">
      <input type="text" v-model="email" placeholder="Email" />
      <input type="text" v-model="password" placeholder="Пароль" />
      <div class="reset">
        <router-link :to="{ name: 'reset' }" class="reset"
          >Забыли пароль?</router-link
        >
      </div>
      <button type="submit" class="button-form">Войти в аккаунт</button>
    </form>
    <div class="auth-links">
      Нет аккаунта?
      <router-link :to="{ name: 'register' }">Зарегистрироваться</router-link>
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
.reset {
  font-size: 18px;
  text-align: right;
  margin-bottom: 1rem;
}
</style>
