<template>
  <header
    class="cv-header"
    :class="{ 'is-fixed': isFixed }"
    >
    <div
      v-show="canBack"
      class="cv-header-button left"
      @click="$router.back()"
      />
    <h1
      class="cv-header-title"
      v-text="title"
      />
    <div class="cv-header-button right">
      <slot name="right" />
    </div>
  </header>
</template>

<script>
  import Vue from 'vue';

  export default Vue.component('cv-header', {
    props: {
      isFixed: {
        type: Boolean,
        default: true,
      },
      title: {
        type: String,
        default: '',
      },
    },
    computed: {
      canBack() {
        if (this.$router.history.current.fullPath === '/') return false;
        return true;
      },
    },
  });
</script>


<style lang="less" scoped>
  @import "~@/styles/common";

  header {
    display: flex;
    align-items: center;
    background-color: #78BF89;
    box-sizing: border-box;
    color: #fff;
    height: 44px;
    line-height: 1;
    padding: 0 @content-edge;
    position: relative;
    text-align: center;
    white-space: nowrap;

    .cv-header-button {
      flex: 0 0 auto;
      display: inline-block;
    }

    .cv-header-button.left {
      text-align: left;
      .css-arrow(@width: 12px, @height: 12px, @lineWidth: 1px, @deg: -45deg);
    }

    .cv-header-button.right {
      text-align: right;
    }

    .cv-header-title {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: inherit;
      font-weight: 400;
      flex: 1;
    }
  }

  .cv-header.is-fixed {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
  }

</style>
