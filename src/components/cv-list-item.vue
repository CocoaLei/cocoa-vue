<template>
  <transition name="cv-item-fade">
    <div class="cv-list-item-container">
      <slot name="cv-list-item"></slot>
    </div>
  </transition>
</template>

<script>
  import Vue from 'vue';

  export default Vue.component('cv-list-item', {
    props: {
      animation: {
        type: Boolean,
        default: true,
      },
    },
  });
</script>

<style lang="less" scoped>

  .cv-item-fade-enter-active,
  .cv-item-fade-leave-active {
    transition: opacity .75s;
  }

  .cv-item-fade-enter,
  .cv-item-fade-leave-to {
    opacity: 0;
  }

</style>
