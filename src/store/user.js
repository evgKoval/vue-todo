import firebase from "firebase/app";
import "firebase/auth";

class User {
  constructor(id) {
    this.id = id;
  }
}

export default {
  state: {
    user: null
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    }
  },
  actions: {
    async registerUser({ commit }, { email, password }) {
      commit("CLEAR_ERROR");
      commit("SET_LOADING", true);
      try {
        const user = await firebase
          .auth()
          .createUserWithEmailAndPassword(email, password);
        commit("SET_USER", new User(user.user.uid));

        commit("SET_NOTIFICATION", "Регистрация прошла успешно");

        commit("SET_LOADING", false);
      } catch (error) {
        commit("SET_LOADING", false);
        commit("SET_ERROR", error.message);
        throw error;
      }
    },
    async loginUser({ commit }, { email, password }) {
      commit("CLEAR_ERROR");
      commit("SET_LOADING", true);
      try {
        const user = await firebase
          .auth()
          .signInWithEmailAndPassword(email, password);
        commit("SET_USER", new User(user.user.uid));

        commit("SET_LOADING", false);
      } catch (error) {
        commit("SET_LOADING", false);
        commit("SET_ERROR", error.message);
      }
    },
    loggedUser({ commit }, user) {
      commit("SET_USER", new User(user.uid));
    },
    logoutUser({ commit }) {
      firebase.auth().signOut();
      commit("SET_USER", null);
    },
    forgotPassword({ commit }, email) {
      firebase
        .auth()
        .sendPasswordResetEmail(email)
        .then(() => {
          commit("SET_NOTIFICATION", "Запрос о сбросе пароля на вашей почте");
        })
        .catch(error => {
          commit("SET_ERROR", error.message);
        });
    },
    initAuth({ commit }) {
      return new Promise(res => {
        firebase.auth().onAuthStateChanged(user => {
          if (user) {
            commit("SET_USER", new User(user.uid));
          }

          res(user);
        });
      });
    }
  },
  getters: {
    user(state) {
      return state.user;
    },
    checkUser(state) {
      return state.user !== null;
    }
  }
};
