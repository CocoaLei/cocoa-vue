<template>
  <div class="cv-loading">
    <div class="cv-loading-inner">
      <span/>
      <span/>
      <span/>
      <span/>
      <span/>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';

  export default Vue.component('bar-mask', {
    data() {
      return {};
    },
  });
</script>

<style lang="less" scoped>
  @keyframes load{
    0%,100%{
      height: 22px;
      background: lightgreen;
    }
    50%{
      height: 66px;
      background: lightblue;
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
      flex-wrap: wrap;
      width: 88px;
      span {
        width: 8px;
        height: 22px;
        background: transparent;
        animation: load .75s ease infinite;
      }
      span:nth-of-type(2) {
        animation-delay: 0.15s;
      }
      span:nth-of-type(3) {
        animation-delay: 0.30s;
      }
      span:nth-of-type(4) {
        animation-delay: 0.45s;
      }
      span:nth-of-type(5) {
        animation-delay: 0.60s;
      }
    }
  }
</style>
