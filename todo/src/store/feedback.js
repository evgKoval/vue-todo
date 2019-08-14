import { stat } from "fs";

export default {
  state: {
    loading: true,
    error: null
  },
  mutations: {
    SET_LOADING(state, event) {
      state.loading = event;
    },
    SET_ERROR(state, error) {
      state.error = error;
    },
    CLEAR_ERROR(state) {
      state.error = null
    }
  },
  actions: {
    setLoading(context, event) {
      context.commit("SET_LOADING", event);
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
    }
  }
};
