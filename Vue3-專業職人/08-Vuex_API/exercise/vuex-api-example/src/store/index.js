import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    photoArr: [],
    idx: 0,
    isLoad: false,
  },
  actions: {
    handleInit({ commit }) {
      console.log("1");
      // 因為 axios 本身就是一個 promise 的回傳
      return axios
        .get("https://vue-lessons-api.vercel.app/photo/list")
        .then((res) => {
          console.log("2");
          commit("init", res.data);
          return res.data;
        });
      commit("init");
    },
    handleLoadState({ commit }, bool) {
      commit("loadState", bool);
    },
  },
  mutations: {
    init(state, payload) {
      state.photoArr = payload;
      console.log(state.photoArr);
    },
    loadState(state, bool) {
      state.isLoad = bool;
    },
  },
  getters: {
    isLoad(state) {
      return state.isLoad;
    },
    photoArr(state) {
      return state.photoArr;
    },
    idx(state) {
      return state.idx;
    },
  },
});
