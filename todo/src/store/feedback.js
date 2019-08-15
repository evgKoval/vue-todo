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
    setLoading(context, event) {
      context.commit("SET_LOADING", event);
    },
    setNotification(context, notification) {
      context.commit("SET_NOTIFICATION", notification);
    },
    clearNotification(context) {
      context.commit("CLEAR_NOTIFICATION");
    },
    setError(context, error) {
      context.commit("SET_ERROR", error);
    },
    clearError(context) {
      context.commit("CLEAR_ERROR");
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
