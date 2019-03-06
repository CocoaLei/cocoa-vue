<template>
  <div class="page">
    <cv-header title="CV Loading" />
    <div
      v-loading="isLoading"
      class="cv-loading-container"
      spinner-mask-type="bar"
      />
    <div
      v-loading="isLoading"
      class="cv-loading-container"
      spinner-mask-type="duplex"
      />
    <div
      v-loading="isLoading"
      class="cv-loading-container"
      spinner-mask-type="ball"
      />
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
    beforeRouteEnter: (to, from, next) => {
      if (to.query.moduleName === 'cv-loading') {
        next();
      } else {
        next({ path: '/' });
      }
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
