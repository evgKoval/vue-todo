import Vue from "vue";
import Vuex from "vuex";
import db from "@/firebase";

import user from "@/store/user";
import feedback from "@/store/feedback";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user,
    feedback
  },
  state: {
    filter: "Все",
    todos: []
  },
  mutations: {
    FETCH_TODOS(state, todos) {
      state.todos = todos;
    },
    CHANGE_DONE(state, data) {
      const index = state.todos.findIndex(todo => todo.id === data.id);
      state.todos[index].done = data.event;
    },
    ADD_TODO(state, todo) {
      state.todos.push(todo);
    },
    DELETE_TODO(state, id) {
      const index = state.todos.findIndex(todo => todo.id === id);
      state.todos.splice(index, 1);
    },
    UPDATE_TODO(state, gotTodo) {
      const index = state.todos.findIndex(todo => todo.id === gotTodo.id);
      state.todos.splice(index, 1, gotTodo);
    },
    CLEAR_DONE_TODOS(state) {
      state.todos = state.todos.filter(todo => !todo.done);
    },
    CHANGE_FILTER(state, filter) {
      state.filter = filter;
    }
  },
  actions: {
    fetchTodos(context) {
      context.state.loading = true;
      db.collection("todos")
        .get()
        .then(querySnapshot => {
          let tempTodos = [];
          querySnapshot.forEach(doc => {
            const data = {
              id: doc.id,
              title: doc.data().title,
              done: doc.data().done,
              timestamp: doc.data().timestamp
            };
            tempTodos.push(data);
          });

          context.state.loading = false;
          const tempTodosSorted = tempTodos.sort((a, b) => {
            return a.timestamp.seconds - b.timestamp.seconds;
          });

          context.commit("FETCH_TODOS", tempTodosSorted);
        });
    },
    changeDone(context, data) {
      db.collection("todos")
        .doc(data.id)
        .update({
          done: data.event
        })
        .then(() => {
          context.commit("CHANGE_DONE", data);
        });
    },
    addTodo(context, todo) {
      db.collection("todos")
        .add({
          title: todo.title,
          done: false,
          timestamp: new Date()
        })
        .then(docRef => {
          context.commit("ADD_TODO", {
            id: docRef.id,
            title: todo.title,
            done: false
          });
        });
    },
    deleteTodo(context, id) {
      db.collection("todos")
        .doc(id)
        .delete()
        .then(() => {
          context.commit("DELETE_TODO", id);
        });
    },
    updateTodo(context, gotTodo) {
      db.collection("todos")
        .doc(gotTodo.id)
        .set({
          id: gotTodo.id,
          title: gotTodo.title,
          done: gotTodo.done,
          timestamp: new Date()
        })
        .then(() => {
          context.commit("UPDATE_TODO", gotTodo);
        });
    },
    clearDoneTodos(context) {
      db.collection("todos")
        .where("done", "==", true)
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            doc.ref.delete().then(() => {
              context.commit("CLEAR_DONE_TODOS");
            });
          });
        });
    }
  },
  getters: {
    todosFiltered(state) {
      if (state.filter === "Все") {
        return state.todos;
      } else if (state.filter === "Активные") {
        return state.todos.filter(todo => !todo.done);
      } else {
        return state.todos.filter(todo => todo.done);
      }
    },
    showClearButton(state) {
      return state.todos.filter(todo => todo.done).length > 0;
    }
  }
});
