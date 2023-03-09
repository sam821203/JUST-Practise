<script>
export default {
  props: {
    str: {
      type: String,
      default: "My name is Sam",
    },
    bool: {
      type: Boolean,
      default: true,
    },
    number: {
      type: Number,
      default: 0,
    },
    arr: {
      type: Array,
      default: () => [],
    },
    obj: {
      type: Object,
      default: () => ({}),
    },
    handleClickFunction: {
      type: Function,
      default: () => {},
    }
  },
  setup(props) {
    console.log(props);
    return {
      props,
    }
  }
}
</script>

<template>
  <h1>{{ props.str }}</h1>
</template>

<style>
  h1 {
    color: aquamarine;
    font-size: 50px;
  }
</style>