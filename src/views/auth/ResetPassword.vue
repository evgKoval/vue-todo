<template>
  <div class="login text-center">
    <h2>Восстановить пароль</h2>
    <form @submit.prevent="reset">
      <input
        type="email"
        v-validate="'required|email'"
        v-model="email"
        placeholder="Email"
        name="email"
      />
      <div class="vaditaion">{{ errors.first("email") }}</div>
      <button type="submit" class="button-form">
        <template v-if="loading">
          <div class="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </template>
        <span v-else>Восстановить</span>
      </button>
      <div class="message error" v-show="error">{{ error }}</div>
      <div class="message notification" v-show="notification">
        {{ notification }}
      </div>
    </form>
    <div class="auth-links">
      <router-link :to="{ name: 'login' }">Назад</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "reset",
  data() {
    return {
      email: ""
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
    reset() {
      this.$validator.validate().then(valid => {
        if (valid) {
          this.$store.dispatch("forgotPassword", this.email);
        }
      });
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
