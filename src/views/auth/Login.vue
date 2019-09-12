<template>
  <div class="login text-center">
    <h2>Вход</h2>
    <form @submit.prevent="login">
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
      <div class="reset">
        <router-link :to="{ name: 'reset' }" class="reset"
          >Забыли пароль?</router-link
        >
      </div>
      <button type="submit" class="button-form">
        <template v-if="loading">
          <div class="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </template>
        <span v-else>Войти в аккаунт</span>
      </button>
      <div class="message error" v-show="error">{{ error }}</div>
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
  mounted() {
    this.$store.dispatch("clearError");
  },
  computed: {
    loading() {
      return this.$store.getters.loading;
    },
    error() {
      return this.$store.getters.error;
    }
  },
  methods: {
    login() {
      this.$validator.validate().then(valid => {
        if (valid) {
          const user = {
            email: this.email,
            password: this.password
          };

          this.$store.dispatch("loginUser", user).then(() => {
            this.$router.push("/");
          });
        }
      });
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
