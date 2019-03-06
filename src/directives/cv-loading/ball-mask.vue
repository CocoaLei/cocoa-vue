<template>
  <div class="cv-loading">
    <div class="cv-loading-inner">
      <span />
      <span />
      <span />
      <span />
      <span />
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';

  export default Vue.component('ball-mask', {
    data() {
      return {};
    },
  });
</script>

<style lang="less" scoped>
  @keyframes load {
    0%{
      opacity: 1;
      transform: scale(1.5);
    }
    100%{
      opacity: 0.2;
      transform: scale(.5);
    }
  }

  .cv-loading {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .cv-loading-inner {
      display: flex;
      justify-content: space-around;
      align-items: center;
      min-height: 4em;

      span {
        display: inline-block;
        width: 1em;
        height: 1em;
        margin: auto 4px;
        border-radius: 50%;
        background: lightgreen;
        animation: load 1.04s ease infinite;
      }
      span:last-child{
        margin-right: 0px;
      }
      span:nth-child(1){
        animation-delay:0.13s;
      }
      span:nth-child(2){
        animation-delay:0.26s;
      }
      span:nth-child(3){
        animation-delay:0.39s;
      }
      span:nth-child(4){
        animation-delay:0.52s;
      }
      span:nth-child(5){
        animation-delay:0.65s;
      }
    }
  }
</style>
