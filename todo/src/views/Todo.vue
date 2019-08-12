<template>
  <div class="todo">
    <input
      type="text"
      class="todo-input"
      placeholder="Что необходимо сделать?"
      v-model="todo_input"
      @keyup.enter="addTodo"
    />
    <transition-group
      name="fade"
      enter-active-class="animated fadeInUp"
      leave-active-class="animated fadeOutDown"
    >
      <todo-item
        v-for="(todo, index) in todosFiltered"
        :key="todo.id"
        :todo="todo"
        :index="index"
      ></todo-item>
    </transition-group>
    <hr />
    <div class="flex todo-ext">
      <div class="todo-filters">
        <button
          class="filter-button"
          :class="{ 'filter-active': filter === 'Все' }"
          @click="filter = 'Все'"
        >
          Все
        </button>
        <button
          class="filter-button"
          :class="{ 'filter-active': filter === 'Активные' }"
          @click="filter = 'Активные'"
        >
          Активные
        </button>
        <button
          class="filter-button"
          :class="{ 'filter-active': filter === 'Завершенные' }"
          @click="filter = 'Завершенные'"
        >
          Завершенные
        </button>
      </div>
      <div class="todo-clear">
        <transition name="fade">
          <button
            v-if="showClearButton"
            class="clear-button"
            @click="clearDone"
          >
            Очистить выполненые задачи
          </button>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import { eventBus } from "@/main";
import TodoItem from "@/components/TodoItem.vue";

export default {
  name: "todo",
  components: {
    TodoItem
  },
  data() {
    return {
      todo_input: "",
      cacheTitle: "",
      filter: "Все",
      todos: [
        {
          id: 1,
          title: "Task 1",
          done: false,
          editing: false
        },
        {
          id: 2,
          title: "Task 2",
          done: false,
          editing: false
        }
      ]
    };
  },
  created() {
    eventBus.$on("deletedTodo", index => this.deleteTodo(index));
    eventBus.$on("finishedEdit", data => this.finishedEdit(data));
  },
  computed: {
    todosFiltered() {
      if (this.filter === "Все") {
        return this.todos;
      } else if (this.filter === "Активные") {
        return this.todos.filter(todo => !todo.done);
      } else {
        return this.todos.filter(todo => todo.done);
      }
    },
    showClearButton() {
      return this.todos.filter(todo => todo.done).length > 0;
    }
  },
  methods: {
    addTodo() {
      if (this.todo_input.trim().length === 0) {
        return;
      }

      this.todos.push({
        id: Math.random(),
        title: this.todo_input,
        done: false,
        editing: false
      });

      this.todo_input = "";
    },
    deleteTodo(index) {
      this.todos.splice(index, 1);
    },
    clearDone() {
      this.todos = this.todos.filter(todo => !todo.done);
    },
    finishedEdit(data) {
      this.todos.splice(data.index, 1, data.todo);
    }
  }
};
</script>

<style scoped>
@import url(https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css);

.todo-input {
  width: 100%;
  padding: 15px 21px;
  font-size: 18px;
  border: 1px solid lightgray;
  border-radius: 6px;
  outline: none;
  margin-bottom: 1rem;
}

.todo-input:focus {
  box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.06);
}

.todo-ext {
  margin-top: 15px;
  justify-content: space-between;
}

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

.clear-button {
  height: 36px;
  padding: 0 15px;
  color: white;
  background-color: royalblue;
  border: none;
  outline: none;
  cursor: pointer;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.15s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
