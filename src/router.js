import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/home';

const CVLoading = () => import('./views/loading');
const CVAlert = () => import('./views/alert');
const CVNoData = () => import('./views/no-data');
const Canvas = () => import('./views/canvas');
const CSSAnimation = () => import('./views/css-animation');

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.publicPath,
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
    {
      path: '/canvas',
      name: 'canvas',
      component: Canvas,
    },
    {
      path: '/css-animation',
      name: 'css animation',
      component: CSSAnimation,
    },
  ],
});
