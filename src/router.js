import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/home';

const CVLoading = () => import('./views/loading');
const CVAlert = () => import('./views/alert');
const CVNoData = () => import('./views/no-data');
const Canvas = () => import('./views/canvas');
const CSSAnimation = () => import('./views/css-animation');
const HTMLMedias = () => import('./views/media');

Vue.use(Router);

const router = new Router({
  mode: 'history',
  // 如果项目发布路径为根路径，则此选项可省略
  // 如果项目发布在网站子路径，则需要设置
  base: process.env.publicPath,
  // 切换到新路由时，页面的滚动行为
  // 只在支持 history.pushState 的浏览器中可用
  scrollBehavior: (to, from, savedPos) => {
    // savedPos 只在通过浏览器的前进后退按钮触发 popstate 时可用
    if (savedPos) {
      return savedPos;
    }
    return { x: 0,
y: 0 };
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: { requireAuth: true },
      beforeEnter: (to, from, next) => {
        // eslint-disable-next-line
        next();
      },
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
    {
      path: '/html-media',
      name: 'HTML Media',
      component: HTMLMedias,
    },
  ],
});

// router.beforeEach((to, from, next) => {
//   // eslint-disable-next-line
//   // console.log(to, from, next);
//   next();
// });
//
// router.beforeResolve((to, from, next) => {
//   // eslint-disable-next-line
//   // console.log(to, from, next);
//   next();
// });
//
// router.afterEach((to, from) => {
//   // eslint-disable-next-line
//   // console.log(to, from);
// });

export default router;
