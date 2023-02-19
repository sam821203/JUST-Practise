<template lang="pug">
  #app
    h1 記帳程式
    hr  
    RecordList(v-bind:records="records"
              @removeListItem="list1RemoveItem")
    h2 第二個人
    RecordList(v-bind:records="records2")


</template>

<script>
import RecordList from "./components/RecordList.vue";
export default {
  name: "app",
  data() {
    return {
      msg: "Welcome to first vue test app!",
      records: [
        {
          date: "2018/8/1",
          price: 500,
          cata: "食物"
        },
        {
          date: "2018/8/3",
          price: 800,
          cata: "衣服"
        },
        {
          date: "2018/8/8",
          price: 1200,
          cata: "手機"
        }
      ],
      records2: [
        {
          date: "2018/8/3",
          price: 540,
          cata: "食物"
        },
        {
          date: "2018/8/9",
          price: 820,
          cata: "衣服"
        },
        {
          date: "2018/8/10",
          price: 1500,
          cata: "手機"
        }
      ]
    };
  },
  methods: {
    list1RemoveItem() {
      console.log("App receive event from child");
    }
  },
  components: {
    RecordList: RecordList
  }
};
</script>

<style lang="sass"></style>
