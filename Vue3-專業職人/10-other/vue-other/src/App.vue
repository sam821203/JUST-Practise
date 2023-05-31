<script setup>
import { ref } from "vue";

const name = ref('Sam')
const colorRed = ref('#ffcccc');

const handleColor = () => {
  colorRed.value = '#0000ff'
};

</script>
<template>
  <h1 class="title">{{ name }}</h1>
  <button @click="handleColor">Add</button>
</template>

<style lang="scss">
.title {
  font-size: 30px;
  color: v-bind(colorRed);
}
</style>
