<template>
  <div class="page">
    <cv-header title="Cocoa Vue" />
    <div class="modules-container">
      <cv-list-item class="module-item" v-for="(item, index) in modules" :key="index">
        <div slot="cv-list-item" class="cv-list-item" @click="$router.push({ path: item.module_path })">
          <span>{{ item.module_name }}</span>
          <span>{{ item.module_desc }}</span>
        </div>
      </cv-list-item>
    </div>
  </div>
</template>

<script>
  import '@/layouts/cv-header';
  import '@/components/cv-list-item';
  import modulesJ from '@/assets/modules.json';

  export default {
    data() {
      return {
        modules: modulesJ,
      };
    },
  };
</script>

<style lang="less" scoped>
  .page {
    margin: 0;
    padding: 0;
    background-color: #f5f5f5;

    .modules-container {
      display: flex;
      align-items: flex-start;
      flex-wrap: wrap;
      margin-top: 44px;
      padding: 8px;

      .module-item {
        flex: 1 1 auto;
        width: 80%;
        height: 120px;
        background-color: #fff;
        margin: 8px;
        .cv-list-item {
          display: flex;
          align-items: flex-start;
          flex-direction: column;
          flex-wrap: wrap;
          height: 100%;
          span {
            flex: 1 0 auto;
            padding: 8px;
          }
        }
      }
    }
  }
</style>
