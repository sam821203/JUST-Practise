import Vue from "vue";
import App from "./App";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

// store.dispatch("loadTodos");

new Vue({
  el: "#app",
  router,
  store,
  components: { App },
  template: "<App/>"
});
