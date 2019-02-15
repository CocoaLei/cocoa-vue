<template>
  <div class="page">
    <cv-header title="CV Alert" />
    <div class="cv-alert-container">
      <span @click="showMsg = !showMsg">show alert</span>
      <cv-alert message="This is a info alert" v-if="showMsg"></cv-alert>
      <cv-alert type="warning" message="This is a warning alert"  v-if="showMsg"></cv-alert>
      <cv-alert type="error" message="This is a error alert" v-if="showMsg"></cv-alert>
      <cv-alert type="success" message="This is a success alert" v-if="showMsg"></cv-alert>
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
    margin: 0;
    padding: 0;
    background-color: #f5f5f5;

    .cv-alert-container {
      margin-top: 88px;
      width: 100%;
      height: 200px;
      background-color: #fff;
    }
  }
</style>
