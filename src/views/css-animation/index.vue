<template>
  <div class="page">
    <cv-header title="CSS Animation" />
    <div class="css-animation-container">
      <div class="animation-ball" />
    </div>
  </div>
</template>

<script>
  import '@/layouts/cv-header';

  export default {
    name: 'CVCSSAnimation',
    path: 'css-animation',
    data() {
      return {
      };
    },
  };
</script>

<style lang="less" scoped>
  @import "~@/styles/common";

  @keyframes ball-animation {
    from {
      margin-left: 0;
      opacity: 1;
    }

    50% {
      margin-left: 100%;
      opacity: 0.5;
    }

    to {
      margin-left: 0;
      opacity: 1;
    }
  }

  .page {
    margin: 0;
    padding: 0;
    background-color: #f5f5f5;

    .css-animation-container {
      margin-top: 44px;
      width: 100%;
      height: 200px;
      background-color: #fff;
      .animation-ball {
        width: 24px;
        height: 24px;
        border-radius: 50%;
        background-color: blue;
        //
        animation-duration: 2s;
        animation-timing-function: ease-in-out;
        animation-name: ball-animation;
        animation-direction: reverse;
        animation-iteration-count: infinite;
      }
    }
  }
</style>
