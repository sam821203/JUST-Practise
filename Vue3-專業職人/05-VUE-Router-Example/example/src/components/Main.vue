<script>
export default {

}
</script>

<template>
  <main>
    <div class="mid">
      <div class="box1"></div>
      <div class="box2"></div>
      <div class="box3"></div>
    </div>
  </main>
</template>

<style lang="scss">
  main {
    width: 100%;
    height: 294px;
    background-color: #5b0fa1;
    @media screen and (max-width: 640px) {
      width: 100%;
      height: auto;
      overflow: hidden;
      background-color: #5b0fa1;
    }
  }
  main > .mid {
    width: 1024px;
    height: 100%;
    margin: 0 auto;
    background-color: #5b0fa1;
    @media screen and (max-width: 1044px) {
      width: 100%;
    }
    @media screen and (max-width: 640px) {
      width: 100%;
      height: 294px;
    }
  }
  main > .mid > div {
    width: 33.3333%;
    height: 100%;
    float: left;
    @media screen and (max-width: 640px) {
      width: 100%;
      height: 277px;
      float: left;
    }
  }
  .box1 {
    cursor: pointer;
    background-image: url("~@/assets/images/rightbtn2.jpg");
    background-position: 50% 50%;
    background-repeat: no-repeat;
  }
  .box2 {
    background-image: url("~@/assets/images/r1.jpg");
    background-size: cover;
  }
  .box3 {
    background-image: url("~@/assets/images/r2.jpg");
    background-size: cover;
  }
</style>