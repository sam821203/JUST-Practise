<template lang="pug">
  #app
    h1 記帳程式
    hr  
    RecordList(v-bind:records="records"
              @removeListItem="list1RemoveItem")
    h2 第二個人
    RecordList(v-bind:records="records2",
              @removeListItem="list2RemoveItem")
    hr

    input(v-model="newRecord.cata" placeholder="名稱")
    input(v-model="newRecord.date" placeholder="日期")
    input(v-model.number="newRecord.price" placeholder="價格")
    button(@click="addRecord") 送出
</template>

<script>
import RecordList from "./components/RecordList.vue";
export default {
  name: "app",
  data() {
    return {
      msg: "Welcome to first vue test app!",
      newRecord: {},
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
    list1RemoveItem(obj) {
      this.records = this.records.filter(item => item !== obj.record);
    },
    list2RemoveItem(obj) {
      this.records2 = this.records2.filter(item => item !== obj.record);
    },
    addRecord() {
      this.records.push(this.newRecord);
      this.newRecord = {};
    }
  },
  components: {
    RecordList: RecordList
  }
};
</script>

<style lang="sass">
html,
body
  padding: 0
  margin: 0
</style>
