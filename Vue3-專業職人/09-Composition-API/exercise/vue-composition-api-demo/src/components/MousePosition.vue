<template>
  <div class="box">
    <h1>Mouse Position</h1>
    <h2>x: {{ x }} y: {{ y }}</h2>
  </div>
</template>

<script>
import { MousePosition } from '../composition-api/useMousePosition.js';

export default {
  setup() {
    const [ x, y ] = MousePosition();
    return { x, y };
  },
};
</script>

<style lang="scss"></style>
