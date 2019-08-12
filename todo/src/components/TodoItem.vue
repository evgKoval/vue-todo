<template>
  <div class="todo-item">
    <div class="flex align-items-center">
      <div class="todo-check">
        <checkbox v-model="done" color="#2ecc71" :size="21" />
      </div>
      <div
        class="todo-label"
        :class="{ 'todo-done': done }"
        v-if="!editing"
        @dblclick="editTodo"
      >
        {{ title }}
      </div>
      <input
        v-else
        type="text"
        class="todo-edit"
        v-model="title"
        @blur="doneEdit"
        @keyup.enter="doneEdit"
        @keyup.esc="cancelEdit"
        v-focus
      />
    </div>
    <div class="todo-delete" @click="deleteTodo(index)">&times;</div>
  </div>
</template>

<script>
import { eventBus } from "@/main";
import Checkbox from "vue-material-checkbox";

export default {
  name: "todo-item",
  props: {
    todo: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },
  components: {
    Checkbox
  },
  data() {
    return {
      id: this.todo.id,
      title: this.todo.title,
      done: this.todo.done,
      editing: this.todo.editing,
      cacheTitle: ""
    };
  },
  methods: {
    deleteTodo(index) {
      eventBus.$emit("deletedTodo", index);
    },
    editTodo() {
      this.cacheTitle = this.title;
      this.editing = true;
    },
    doneEdit() {
      if (this.title.trim().length === 0) {
        this.title = this.cacheTitle;
      }

      this.editing = false;
      eventBus.$emit("finishedEdit", {
        index: this.index,
        todo: {
          id: this.id,
          title: this.title,
          done: this.done,
          editing: this.editing
        }
      });
    },
    cancelEdit() {
      this.title = this.cacheTitle;
      this.editing = false;
    }
  },
  directives: {
    focus: {
      inserted: function(el) {
        el.focus();
      }
    }
  }
};
</script>

<style scoped>
.todo-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.todo-label {
  padding-left: 15px;
}

.todo-delete {
  padding: 15px;
  font-size: 18px;
  cursor: pointer;
}

.todo-delete:hover {
  color: orangered;
}

.todo-edit {
  width: 100%;
  font-size: 21px;
  padding: 11.5px;
  padding-left: 14px;
  border: 1px solid lightgray;
  border-radius: 3px;
  outline: none;
}

.todo-check .m-chckbox--container {
  margin: 15px 0;
}

.todo-done {
  text-decoration: line-through;
  color: gray;
}
</style>
