<template lang="pug">
  #app
    img(src="./assets/logo.png")
    br
    
    button(@click="setTodos(['amy', 'tom', 'peter'])") Update todos
    button(@click="loadTodos") Load todos

    router-link(to="/PageTest") To PageTest
    hr
    router-link(to="/user/Sam") User Sam
    hr
    router-link(to="/user/Linn") User Linn
    hr
    router-link(to="/user/Tina") User Tina
    hr
    router-link(to="/user/id/2") User 2
    transition(name="page" mode="out-in")
      router-view(:key="$route.path")
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  name: "App",
  computed: {
    ...mapState(["todos"])
  },
  mounted() {
    this.loadTodos();
  },
  methods: {
    ...mapMutations(["setTodos"]),
    ...mapActions(["loadTodos"])
  }
};
</script>

<style lang="sass">
#app
  font-family: "Avenir", Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
  margin-top: 60px

.page-enter-active,
.page-leave-active
  transition: .3s

.page-enter,
.page-leave-to
  opacity: 0
</style>
