<template lang="pug">
  ul.record
    li(v-for="record in records")
      span.cata {{ record.cata }}
      span.date {{ record.date }}
      span.price {{ record.price }} 元

      button(@click="toggleRemove(record)") 移除
</template>

<script>
export default {
  props: ["records"],
  data() {
    return {};
  },
  methods: {
    toggleRemove(record) {
      console.log("RecordList Toggle Event");
      this.$emit("removeListItem");
    }
  }
};
</script>

<style lang="sass">
.record
  li
    display: flex
    padding: 5px
    border: 2px solid #000
    .cata
      flex: 4
    .date
      flex: 2
    .date
      flex: 2
</style>
