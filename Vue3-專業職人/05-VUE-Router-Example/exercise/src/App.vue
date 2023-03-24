<script>
import { ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
export default {
  setup() {
    const routerArr = ['', 'about', 'Courses'];
    const route = useRoute();
    const router = useRouter();
    const idx = ref(0);

    watch(() => route.path, () => {
      routerArr.forEach((item, index) => {
        const rp = route.path.substring(1).split('/')[0];
        if (rp === item) {
          idx.value = index;
        }
      })
    })
    return {
      idx,
    };
  },
};
</script>

<template>
  <div id="nav">
    <router-link to="/" :class="{ active: idx === 0 }"> Home </router-link>
    |
    <router-link to="/about" :class="{ active: idx === 1 }"> About </router-link>
    |
    <router-link to="/Courses" :class="{ active: idx === 2 }"> Courses </router-link>
  </div>
  <router-view />
</template>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
html,
body {
  width: 100%;
  height: 100%;
}
#app {
  width: 100%;
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.active {
      color: #42b983;
    }
  }
}
</style>
