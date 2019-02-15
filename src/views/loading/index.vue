<template>
  <div class="page">
    <cv-header title="CV Loading" />
    <div class="cv-loading-container" v-loading="isLoading" spinner-mask-type="bar"></div>
    <div class="cv-loading-container" v-loading="isLoading" spinner-mask-type="duplex"></div>
    <div class="cv-loading-container" v-loading="isLoading" spinner-mask-type="ball"></div>
  </div>
</template>

<script>
  import '@/layouts/cv-header';

  export default {
    name: 'CVLoading',
    path: 'loading',
    data() {
      return {
        isLoading: false,
      };
    },
    created() {
      setInterval(() => {
        this.isLoading = !this.isLoading;
      }, 2000);
    },
  };
</script>

<style lang="less" scoped>
  @import "~@/styles/common";

  .page {
    margin: 0;
    padding: 0;
    background-color: #f5f5f5;

    .cv-loading-container {
      margin-top: 44px;
      width: 100%;
      height: 200px;
      background-color: #fff;
    }
  }
</style>
