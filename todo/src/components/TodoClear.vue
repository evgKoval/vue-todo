<template>
  <div class="todo-clear">
    <button
      v-if="showClearButton"
      class="clear-button"
      @click="clearDone"
    >
      Очистить выполненые задачи
    </button>
  </div>
</template>

<script>
import { eventBus } from "@/main";

export default {
  name: "todo-clear",
  props: {
    showClearButton: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      
    };
  },
  methods: {
    clearDone() {
      eventBus.$emit('clearDone')
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
  border: none;
  outline: none;
  cursor: pointer;
}
</style>
