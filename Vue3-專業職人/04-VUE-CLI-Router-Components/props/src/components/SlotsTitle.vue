<script>
export default {};
</script>

<template>
  <h1>
    <img src="../assets/logo.png" alt="" />
    <slot></slot>
  </h1>
</template>

<style scoped>
h1 {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
  color: #fff;
  font-size: 30px;
}

img {
  display: block;
  width: 25px;
  margin-right: 10px;
}
</style>
