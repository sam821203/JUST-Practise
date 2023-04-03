import { createStore } from "vuex";

export default createStore({
  state: {
    isOpen: true,
  },
  actions: {},
  mutations: {},
  getters: {
    isOpen(state) {
      return state.isOpen;
    },
  },
});
