import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant';
import 'vant/lib/index.css';
import Cookies from 'js-cookie';
import {
  getToken
} from '@/utils/auth';

Vue.use(Vant)


router.beforeEach((to, from, next) => {
  // 方法1：通过在路由元信息中添加登陆验证字段来实现进入某个页面时是否需要验证登录
  if (to.meta.noCache) { // 判断路由元信息中是否添加登陆验证字段
    // 判断 sessionStorage 中是否有登陆信息，如果已经有登陆信息，则放行
    if (getToken()) { //
      next()
    } else {
      Element.Message({
        message: '请先登录！！！',
        type: 'warning'
      });
      // 如果没有登录则跳转到登陆页面
      next({
        path: '/login'
      })
    }
  } else {
    next()
  }
})

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
