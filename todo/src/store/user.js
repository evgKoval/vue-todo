import firebase from "firebase/app";

class User {
  constructor(id) {
    this.id = id;
  }
}

export default {
  state: {
    user: null
  },
  mutations: {},
  actions: {
    async registerUser(context, { email, password }) {
      const user = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
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
