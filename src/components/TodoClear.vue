<template>
  <div class="todo-clear">
    <button v-if="showClearButton" class="clear-button" @click="clearDone">
      Очистить выполненые задачи
    </button>
  </div>
</template>

<script>
export default {
  name: "todo-clear",
  computed: {
    showClearButton() {
      return this.$store.getters.showClearButton;
    }
  },
  methods: {
    clearDone() {
      this.$store.dispatch("clearDoneTodos");
    }
  }
};
</script>

<style scoped>
.clear-button {
  height: 36px;
  padding: 0 15px;
  color: white;
  background-color: royalblue;
  border-radius: 4px;
}

.clear-button:hover {
  background-color: rgb(51, 88, 200);
}
</style>
