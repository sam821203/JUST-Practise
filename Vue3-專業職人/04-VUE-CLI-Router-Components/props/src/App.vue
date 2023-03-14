<script>
import TitleBar from "@/components/TitleBar.vue";
import ListItem from "@/components/ListItem.vue";
import TimerBox from "@/components/TimerBox.vue";
import EventBack from "@/components/EventBack.vue";
import TemplateRefs from "@/components/TemplateRefs.vue";
import SlotsTitle from "@/components/SlotsTitle.vue";
import { ref } from "vue";

export default {
  components: {
    TitleBar,
    ListItem,
    TimerBox,
    EventBack,
    TemplateRefs,
    SlotsTitle,
  },
  setup() {
    const isAnime = ref(false);

    const isOpen = ref(true);
    const handleOpenClass = () => {
      isOpen.value = !isOpen.value;
    };

    const handleTimeOut = (num) => {
      console.log(`Time is over: ${num.value}`);
    };

    const handleAnimeClick = () => {
      isAnime.value = !isAnime.value;
    };

    return {
      isOpen,
      handleOpenClass,
      handleTimeOut,
      // isAnime,
      // handleAnimeClick,
    };
  },
};
</script>

<template>
  <!-- <TitleBar :handleOpenClass="handleOpenClass" />
  <ListItem :isOpen="isOpen" />
  <TimerBox @TimeOut="handleTimeOut" /> -->

  <!-- <EventBack /> -->

  <!-- <TemplateRefs /> -->

  <slots-title>
    <div>
      <a href="">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat, esse
        adipisci, qui sed iste quasi recusandae nisi nostrum optio harum
        deserunt quas. Minus neque perferendis, a officia voluptate quos minima!
      </a>
    </div>
  </slots-title>
  <slots-title>
    <p>test2</p>
  </slots-title>
  <slots-title>
    <p>test3</p>
  </slots-title>

  <!-- <button @click="handleAnimeClick">click</button>
  <transition name="fade">
    <div id="box" v-if="isAnime"></div>
  </transition> -->
</template>

<style>
/* .fade-enter-active {
    animation: bounce-in 0.5s;
  }

  .fade-leave-active {
    animation: bounce-in 0.5s reverse;
  } */

/* .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }

  .fade-leave-from,
  .fade-enter-to {
    opacity: 1;
  } */

/* @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.25);
    }
    100% {
      transform: scale(1);
    }
  } */

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
html,
body {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: slategray;
}
#app {
  width: 400px;
  overflow: hidden;
  border: 1px solid #42b983;
  border-radius: 10px;
}

#box {
  width: 100px;
  height: 100px;
  background-color: red;
}
</style>
