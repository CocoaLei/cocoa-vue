<template>
  <div class="module-page page">
    <cv-header title="Form"/>
    <div class="form-wrapper">
      <form action="">
        <input type="text">
        <input type="submit" value="save">
      </form>
    </div>
  </div>
</template>

<script>
  import '@/layouts/cv-header';

  export default {
    data() {
      return {};
    },
    methods: {
      formAction() {

      },
    },
  };
</script>

<style lang="less" scoped>
  @import "~@/styles/common";

  .page {
    .form-wrapper {
      margin-top: 88px;
      min-height: 440px;
    }
  }
</style>
