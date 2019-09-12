<template>
  <div class="login text-center">
    <h2>Регистрация</h2>
    <form @submit.prevent="register">
      <input
        type="email"
        v-validate="'required|email'"
        v-model="email"
        placeholder="Email"
        name="email"
      />
      <div class="vaditaion">{{ errors.first("email") }}</div>
      <input
        type="password"
        v-validate="'required|min:6'"
        v-model="password"
        placeholder="Пароль"
        name="пароль"
      />
      <div class="vaditaion">{{ errors.first("пароль") }}</div>
      <button type="submit" class="button-form">
        <template v-if="loading">
          <div class="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </template>
        <span v-else>Зарегистрироваться</span>
      </button>
      <div class="message error" v-show="error">{{ error }}</div>
      <div class="message notification" v-show="notification">
        {{ notification }}
      </div>
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
  mounted() {
    this.$store.dispatch("clearError");
    this.$store.dispatch("clearNotification");
  },
  computed: {
    loading() {
      return this.$store.getters.loading;
    },
    error() {
      return this.$store.getters.error;
    },
    notification() {
      return this.$store.getters.notification;
    }
  },
  methods: {
    register() {
      this.$validator.validate().then(valid => {
        if (valid) {
          const user = {
            email: this.email,
            password: this.password
          };

          this.$store.dispatch("registerUser", user).then(() => {
            this.$router.push("/");
          });
        }
      });
    }
  }
};
</script>

<style scoped>
.lds-ring {
  width: 22px;
  height: 22px;
}

.lds-ring div {
  width: 22px;
  height: 22px;
  margin-top: 0;
  border-color: white;
  border-color: white transparent transparent transparent;
}
</style>
