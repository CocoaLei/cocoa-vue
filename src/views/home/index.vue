<template>
  <div class="page">
    <cv-header title="Cocoa Vue" />
    <div class="modules-container">
      <cv-list-item
        v-for="(item, index) in modules"
        :key="index"
        class="module-item"
        >
        <div
          slot="cv-list-item"
          class="cv-list-item"
          @click="$router.push({ path: item.module_path, params: { name: item.module_name } })"
          >
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
    // 在渲染该组件的对应路由被 confirm 前调用
    // 此时组件还未被创建
    beforeRouteEnter: (to, from, next) => {
      next();
    },
    // 当路由更新，当前组件被复用时调用
    beforeRouteUpdate: (to, from, next) => {
      next();
    },
    // 导航离开当前路由时调用
    beforeRouteLeave: (to, from, next) => {
      next();
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
        border-radius: 4px;
        transition: box-shadow .25s ease-in-out, height .25s ease-in-out, background-color .25s ease-in-out;
        &:hover {
          cursor: pointer;
          box-shadow: 4px 4px 6px -2px #78BF89;
          height: 124px;
          background-color: rgba(120, 191, 137, .5);
        }
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
