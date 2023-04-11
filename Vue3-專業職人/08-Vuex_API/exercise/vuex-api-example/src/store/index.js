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
      axios.get('https://vue-lessons-api.vercel.app/photo/list')
        .then(res => {
          commit("init", res.data);
        })
      commit('init');
    }
  },
  mutations: {
    init(state, payload) {
      state.photoArr = payload;
      console.log(photoArr);
    }
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
