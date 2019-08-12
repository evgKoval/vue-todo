<template>
  <div class="todo-filters">
    <button
      class="filter-button"
      :class="{ 'filter-active': filter === 'Все' }"
      @click="changeFilter('Все')"
    >
      Все
    </button>
    <button
      class="filter-button"
      :class="{ 'filter-active': filter === 'Активные' }"
      @click="changeFilter('Активные')"
    >
      Активные
    </button>
    <button
      class="filter-button"
      :class="{ 'filter-active': filter === 'Завершенные' }"
      @click="changeFilter('Завершенные')"
    >
      Завершенные
    </button>
  </div>
</template>

<script>
import { eventBus } from "@/main";

export default {
  name: "todo-filter",
  props: {
    
  },
  data() {
    return {
      filter: "Все",
    };
  },
  methods: {
    changeFilter(filter) {
      this.filter = filter
      eventBus.$emit('filterChanged', filter)
    }
  }
};
</script>

<style scoped>
.filter-button {
  width: 120px;
  height: 36px;
  background-color: white;
  border: 1px solid lightgray;
  border-left: none;
  outline: none;
  cursor: pointer;
}

.filter-button:first-child {
  border-left: 1px solid lightgray;
}

.filter-active {
  background-color: #2ecc71;
  border-color: #2ecc71;
  color: white;
}
</style>
