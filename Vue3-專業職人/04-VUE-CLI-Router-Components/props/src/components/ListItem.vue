<script>
import { reactive } from 'vue';

export default {
  props: {
    isOpen: {
      type: Boolean,
      default: true,
    }
  },
  setup(props) {
    const listArr = reactive([
      { name: "2020 Vue3 專業職人 | 入門篇" },
      { name: "2020 Vue3 專業職人 | 加值篇" },
      { name: "2020 Vue3 專業職人 | 進階篇" },
      { name: "現代 JavaScript 職人之路｜入門篇" },
      { name: "現代 JavaScript 職人之路｜中階實戰篇" },
    ]);
    return {
      listArr,
      props,
    }
  }
};
</script>

<template>
  <transition name="open">
    <ul class="box" v-show="props.isOpen">
      <li v-for="(list, idx) in listArr" :key="list.name">
        {{ idx + 1 }}. {{ list.name }}
      </li>
    </ul>
  </transition>
</template>

<style>
  .box {
    display: block;
    width: 100%;
    /* height: 0; */
    background-color: snow;
    transition: height 0.4s;
  }

  /* .box.open {
    height: 200px;
  } */

  .box > li {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 40px;
    border-bottom: 1px solid #d2d2d2;
    font-size: 12px;
    color: darkslategray;
  }

  .open-enter-active,
  .open-leave-active {
    transition: height .5s ease;
  }

  .open-leave-from,
  .open-enter-to {
    height: 200px;
  }

  .open-leave-to,
  .open-enter-from {
    height: 0px;
  }
  
</style>
