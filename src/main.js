import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import './directives/cv-loading';
import CVAlert from './plugins/cv-alert';

Vue.use(CVAlert);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
