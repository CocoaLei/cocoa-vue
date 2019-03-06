<template>
  <div class="page">
    <cv-header title="CV No-Data" />
    <div
      v-no-data="showNoData"
      class="cv-nodata-container"
      no-data-text="暂无数据"
      >
      <span>No Data View</span>
    </div>
  </div>
</template>

<script>
  import '@/layouts/cv-header';

  export default {
    name: 'CVNoData',
    path: 'nodata',
    data() {
      return {
        showNoData: false,
      };
    },
    created() {
      setInterval(() => {
        this.showNoData = !this.showNoData;
      }, 2000);
    },
  };
</script>

<style lang="less" scoped>
  @import "~@/styles/common";

  .page {
    margin: 0;
    padding: 0;
    background-color: #fff;

    .cv-nodata-container {
      margin-top: 88px;
      width: 100%;
      height: 200px;
      background-color: #fff;
    }
  }
</style>
