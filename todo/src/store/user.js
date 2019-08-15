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
    async registerUser(context, { email, password }) {
      context.commit("CLEAR_ERROR");
      context.commit("SET_LOADING", true);
      try {
        const user = await firebase
          .auth()
          .createUserWithEmailAndPassword(email, password);
        context.commit("SET_USER", new User(user.user.uid));

        context.commit("SET_NOTIFICATION", "Регистрация прошла успешно");

        context.commit("SET_LOADING", false);
      } catch (error) {
        context.commit("SET_LOADING", false);
        context.commit("SET_ERROR", error.message);
        throw error;
      }
    },
    async loginUser(context, { email, password }) {
      context.commit("CLEAR_ERROR");
      context.commit("SET_LOADING", true);
      try {
        const user = await firebase
          .auth()
          .signInWithEmailAndPassword(email, password);
        context.commit("SET_USER", new User(user.user.uid));

        context.commit("SET_LOADING", false);
      } catch (error) {
        context.commit("SET_LOADING", false);
        context.commit("SET_ERROR", error.message);
        throw error;
      }
    },
    loggedUser(context, user) {
      context.commit("SET_USER", new User(user.uid));
    },
    logoutUser(context) {
      firebase.auth().signOut();
      context.commit("SET_USER", null);
    },
    forgotPassword(context, email) {
      firebase
        .auth()
        .sendPasswordResetEmail(email)
        .then(() => {
          context.commit(
            "SET_NOTIFICATION",
            "Запрос о сбросе пароля на вашей почте"
          );
        })
        .catch(error => {
          context.commit("SET_ERROR", error.message);
        });
    },
    initAuth(context) {
      return new Promise(res => {
        firebase.auth().onAuthStateChanged(user => {
          if (user) {
            context.commit("SET_USER", new User(user.uid));
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
