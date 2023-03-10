<script>
export default {
  setup() {
    const handleClickFn = (num, e) => {
      console.log(num, e.target);
    }

    return {
      handleClickFn,
    }
  }
}
</script>

<template>
  <a href="javascript:;" @click="handleClickFn(100, $event)">click</a>
</template>

<style scoped>
  a {
    font-size: 50px;
    color: #fff;
  }
</style>