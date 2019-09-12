export default {
  state: {
    loading: false,
    notification: null,
    error: null
  },
  mutations: {
    SET_LOADING(state, event) {
      state.loading = event;
    },
    SET_NOTIFICATION(state, notification) {
      state.notification = notification;
    },
    CLEAR_NOTIFICATION(state) {
      state.notification = null;
    },
    SET_ERROR(state, error) {
      state.error = error;
    },
    CLEAR_ERROR(state) {
      state.error = null;
    }
  },
  actions: {
    setLoading({ commit }, event) {
      commit("SET_LOADING", event);
    },
    setNotification({ commit }, notification) {
      commit("SET_NOTIFICATION", notification);
    },
    clearNotification({ commit }) {
      commit("CLEAR_NOTIFICATION");
    },
    setError({ commit }, error) {
      commit("SET_ERROR", error);
    },
    clearError({ commit }) {
      commit("CLEAR_ERROR");
    }
  },
  getters: {
    loading(state) {
      return state.loading;
    },
    error(state) {
      return state.error;
    },
    notification(state) {
      return state.notification;
    }
  }
};
