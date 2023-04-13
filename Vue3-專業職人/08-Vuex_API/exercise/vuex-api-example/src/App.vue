<script>
import { onMounted } from "vue";
import { useStore } from "vuex";
import ImageBox from "./components/ImageBox/index.vue";
import LoadingBar from "./components/LoadingBar.vue";
export default {
  components: {
    LoadingBar,
    ImageBox,
  },
  setup() {
    const store = useStore();

    const handImgLoad = (imgArr) => {
      let i = 0;
      imgArr.forEach((image) => {
        const imgs = new Image();
        imgs.src = image.url;
        imgs.onload = () => {
          i++;
          store.dispatch("handleLoadState", i === imgArr.length);
          // store.dispatch("handLoadState", i === imgArr.length);
        };
      });
    };

    const init = () => {
      store.dispatch("handleInit").then((res) => {
        console.log("3");
        handImgLoad(res);
      });
    };

    onMounted(() => {
      init();
    });

    return {};
  },
};
</script>

<template>
  <div id="app">
    <LoadingBar />
    <ImageBox />
  </div>
</template>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
html,
body {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: slategray;
}
</style>
