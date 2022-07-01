import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.prototype.msgSuccess = function (msg) {
  this.$message({
    showClose: true,
    message: msg,
    type: "success"
  });
}

Vue.prototype.msgError = function (msg) {
  this.$message({
    showClose: true,
    message: msg,
    type: "error"
  });
}

Vue.prototype.msgInfo = function (msg) {
  this.$message.info(msg);
}

Vue.config.productionTip = false

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
      store.dispatch("FedLogOut").then(() => {
        sessionStorage.clear();
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

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
