import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import './directives/cv-loading';
import './directives/cv-nodata';
import CVAlert from './plugins/cv-alert';
import enterMixin from './mixins/moduleChangeMixin';
import '@/components/dynamic-component';

Vue.use(CVAlert);
Vue.mixin(enterMixin);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  created() {
    this.$store.subscribe(({ type }, state) => {
      if (type === 'updateModuleName') console.log(state.moduleName);
    });
  },
  render: h => h(App),
}).$mount('#app');
