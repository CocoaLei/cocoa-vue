<template>
  <div class="module-page page">
    <cv-header title="CV Alert" />
    <div class="cv-alert-container">
      <span @click="showMsg = !showMsg">
        show alert
      </span>
      <cv-alert
        v-if="showMsg"
        message="This is a info alert"
        />
      <cv-alert
        v-if="showMsg"
        type="warning"
        message="This is a warning alert"
        />
      <cv-alert
        v-if="showMsg"
        type="error"
        message="This is a error alert"
        />
      <cv-alert
        v-if="showMsg"
        type="success"
        message="This is a success alert"
        />
    </div>
  </div>
</template>

<script>
  import '@/layouts/cv-header';

  export default {
    name: 'CVAlert',
    path: 'alert',
    data() {
      return {
        showMsg: false,
      };
    },
  };
</script>

<style lang="less" scoped>
  @import "~@/styles/common";

  .page {
    .cv-alert-container {
      margin-top: 88px;
      width: 100%;
      height: 200px;
      background-color: #fff;
    }
  }
</style>
