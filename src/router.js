import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/home';

const CVLoading = () => import('./views/loading');
const CVAlert = () => import('./views/alert');
const CVNoData = () => import('./views/no-data');

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/loading',
      name: 'cv-loading',
      component: CVLoading,
    },
    {
      path: '/alert',
      name: 'cv-alert',
      component: CVAlert,
    },
    {
      path: '/nodata',
      name: 'cv-nodata',
      component: CVNoData,
    },
  ],
});
