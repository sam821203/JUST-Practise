<script>
export default {
  props: ["msg"],
  setup(props) {
    console.log(props);
    return {
      props,
    }
  }
}
</script>

<template>
  <h1>{{ props.msg }}</h1>
</template>

<style>
  h1 {
    color: aquamarine;
    font-size: 50px;
  }
</style>