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
export default {
  name: "todo-filter",
  computed: {
    filter() {
      return this.$store.state.filter;
    }
  },
  methods: {
    changeFilter(filter) {
      this.$store.commit("CHANGE_FILTER", filter);
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
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
}

.filter-button:last-child {
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
}

.filter-active {
  background-color: #2ecc71;
  border-color: #2ecc71;
  color: white;
}

@media screen and (max-width: 699px) {
  .todo-filters {
    margin-bottom: 2rem;
  }
}

@media screen and (max-width: 499px) {
  .filter-button {
    width: 100%;
    border-left: 1px solid lightgray;
  }

  .filter-button:first-child,
  .filter-button:last-child {
    border-radius: 0;
  }
}
</style>
