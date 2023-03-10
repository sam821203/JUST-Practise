<script>
import { onMounted, ref } from 'vue';
export default {
  setup() {
    // const textInput = ref(null);
    const num = ref(12312312312312);

    // onMounted(() => {
    //   textInput.value.focus();
    // })
    return {
      // textInput,
      num,
    }
  }
}
</script>

<template>
  <input v-focus v-model="num" id="textBar" type="text" ref="textInput" placeholder="input text">
  <h1 v-price="num"></h1>
</template>

<style scoped>
  a {
    font-size: 50px;
    color: #fff;
  }

  input {
    display: block;
    width: 100%;
    height: 30px;
    background-color: rgb(200, 219, 219);
    padding-left: 10px;
  }
</style>