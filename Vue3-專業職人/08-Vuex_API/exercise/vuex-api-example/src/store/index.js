import { createStore } from "vuex";
import axios from "axios";
import { apiGetPhotoRequest } from "../api";

export default createStore({
  state: {
    photoArr: [],
    idx: 0,
    isLoad: false,
  },
  actions: {
    handleInit({ commit }) {
      console.log("1");

      const res = apiGetPhotoRequest();
      return es.then((response) => {
        commit("init", response.data);
        return response.data;
      });
      // 因為 axios 本身就是一個 promise 的回傳
      // return axios
      //   .get("https://vue-lessons-api.vercel.app/photo/list")
      //   .then((res) => {
      //     console.log("2");
      //     commit("init", res.data);
      //     return res.data;
      //   });
      // commit("init");
    },
    handleLoadState({ commit }, bool) {
      commit("loadState", bool);
    },
    handAdd({ commit }) {
      commit("Add");
    },
    handRemove({ commit }) {
      commit("Remove");
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
    Add(state) {
      state.idx++;
      if (state.idx > state.photoArr.length - 1) {
        state.idx = 0;
      }
    },
    Remove(state) {
      state.idx--;
      if (state.idx < 0) {
        state.idx = state.photoArr.length - 1;
      }
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
