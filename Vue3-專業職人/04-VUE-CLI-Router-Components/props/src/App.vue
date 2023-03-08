<script>
import PropsTest from "@/components/PropsTest.vue"
import { ref } from 'vue'

export default {
  components: {
    PropsTest,
  },
  setup() {
    const data = ref("Hello world!")
    return {
      data,
    }
  }
}
</script>

<template>
  <PropsTest :msg="data"/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
