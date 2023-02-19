<template lang="pug">
.record-list
  ul.record
    li(v-for="(record, rid) in records", 
      :style="{'animation-delay': rid / 3 + 's'}",
      :key="record.cata")
      span.cata {{ record.cata }}
      span.date {{ record.date }}
      span.price {{ record.price }} 元

      button(@click="toggleRemove(record)") 移除

  h3 總計： {{ total }}
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
      this.$emit("removeListItem", {
        record: record
      });
    }
  },
  computed: {
    total() {
      return this.records.reduce((total, record) => total + record.price, 0);
    }
  }
};
</script>

<style lang="sass">
.record-list
  .record
    li
      display: flex
      justify-content: center
      align-items: center
      padding: 5px
      margin-bottom: 15px
      border: 2px solid #000
      border-radius: 5px
      animation: fadeIn 2s both
      .cata
        flex: 4
        font-size: 20px
        font-weight: bold
      .date
        flex: 2
      button
        margin-left: 15px
        margin-right: 10px

@keyframes fadeIn
  0%
    opacity: 0
  100%
    opacity: 1
</style>
