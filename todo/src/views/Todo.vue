<template>
  <div class="todo">
    <input
      type="text"
      class="todo-input"
      placeholder="Что необходимо сделать?"
      v-model="todo_input"
      @keyup.enter="addTodo"
    />
    <div v-if="$store.state.loading" class="lds-ring">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <transition-group
      name="fade"
      enter-active-class="animated fadeInUp"
      leave-active-class="animated fadeOutDown"
    >
      <todo-item v-for="todo in todosFiltered" :key="todo.id" :todo="todo" />
    </transition-group>
    <hr />
    <div class="flex todo-ext">
      <todo-filter />
      <transition name="fade">
        <todo-clear />
      </transition>
    </div>
  </div>
</template>

<script>
import TodoItem from "@/components/TodoItem.vue";
import TodoFilter from "@/components/TodoFilter.vue";
import TodoClear from "@/components/TodoClear.vue";

export default {
  name: "todo",
  components: {
    TodoItem,
    TodoFilter,
    TodoClear
  },
  data() {
    return {
      todo_input: "",
      cacheTitle: ""
    };
  },
  created() {
    this.$store.dispatch("fetchTodos");
  },
  computed: {
    todosFiltered() {
      return this.$store.getters.todosFiltered;
    }
  },
  methods: {
    addTodo() {
      if (this.todo_input.trim().length === 0) {
        return;
      }

      this.$store.dispatch("addTodo", {
        id: Math.random(),
        title: this.todo_input,
        done: false,
        editing: false
      });

      this.todo_input = "";
    }
  }
};
</script>

<style scoped>
@import url(https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css);

.todo-input {
  padding: 15px 21px;
}

.todo-input:focus {
  box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.06);
}

.todo-ext {
  margin-top: 15px;
  justify-content: space-between;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.15s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
  animation-duration: 0.45s;
}

.lds-ring {
  display: block;
  margin: auto;
  position: relative;
  width: 64px;
  height: 64px;
}

.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 51px;
  height: 51px;
  margin: 6px;
  border: 3px solid lightgray;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: lightgray transparent transparent transparent;
}

.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}

.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}

.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}

@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
