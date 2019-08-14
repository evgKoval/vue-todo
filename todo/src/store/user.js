import firebase from "firebase/app";
require("firebase/auth");

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
      const user = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      context.commit("SET_USER", new User(user.user.uid));
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
