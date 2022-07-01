import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout'

Vue.use(Router)

export const constantRoutes = [
  // {
  //   path: "/redirect",
  //   component: Layout,
  //   hidden: true,
  //   children: [{
  //     path: "/redirect",
  //     component: (resolve) => require(["@/views/redirect.vue"], resolve),
  //   }, ],
  // },
  {
    path: "",
    component: Layout,
    redirect: "index",
    children: [{
      path: "/",
      component: (resolve) => require(["@/views/index.vue"], resolve),
      name: "首页",
    }, ],
  },
  // {
  //   path: "",
  //   component: Layout,
  //   redirect: "index",
  //   children: [{
  //     path: "/personal",
  //     component: (resolve) =>
  //       require(["@/views/personal/index.vue"], resolve),
  //     name: "个人推荐信",
  //     meta: {
  //       title: "个人推荐信",
  //       icon: "dashboard",
  //       noCache: true,
  //       affix: true,
  //     },
  //   }, ],
  // },
  // {
  //   path: "",
  //   component: Layout,
  //   redirect: "index",
  //   children: [{
  //     path: "/progres",
  //     component: (resolve) => require(["@/views/progres/index.vue"], resolve),
  //     name: "推荐信进度",
  //     meta: {
  //       title: "推荐信进度",
  //       icon: "dashboard",
  //       noCache: true,
  //       affix: true,
  //     },
  //   }, ],
  // },
  // {
  //   path: "",
  //   component: Layout,
  //   redirect: "index",
  //   children: [{
  //     path: "/PersonalCenter",
  //     component: (resolve) => require(["@/views/PersonalCenter/index.vue"], resolve),
  //     name: "个人中心",
  //     meta: {
  //       title: "个人中心",
  //       icon: "dashboard",
  //       noCache: true,
  //       affix: true,
  //     },
  //   }, ],
  // },
  // {
  //   path: "",
  //   component: Layout,
  //   redirect: "index",
  //   children: [{
  //     path: "/ProblemFeedback",
  //     component: (resolve) =>
  //       require(["@/views/ProblemFeedback/index.vue"], resolve),
  //     name: "问题反馈",
  //     meta: {
  //       title: "问题反馈",
  //       icon: "dashboard",
  //       noCache: true,
  //       affix: true,
  //     },
  //   }, ],
  // },
  // {
  //   path: "",
  //   component: Layout,
  //   redirect: "index",
  //   children: [{
  //     path: "/FormSubmit",
  //     component: (resolve) =>
  //       require(["@/views/FormSubmit/index.vue"], resolve),
  //     name: "表单提交",
  //     meta: {
  //       title: "表单提交",
  //       icon: "dashboard",
  //       noCache: true,
  //       affix: true,
  //     },
  //   }, ],
  // },
  // {
  //   path: "",
  //   component: Layout,
  //   redirect: "/Administration",
  //   children: [{
  //     path: "/Administration",
  //     component: (resolve) =>
  //       require(["@/views/Administration/index.vue"], resolve),
  //     name: "用户管理",
  //     meta: {
  //       title: "用户管理",
  //       icon: "dashboard",
  //       noCache: true,
  //       affix: true,
  //     },
  //   }, ],
  // },
  // {
  //   path: "",
  //   component: Layout,
  //   redirect: "/User",
  //   children: [{
  //     path: "/User",
  //     component: (resolve) => require(["@/views/User/index.vue"], resolve),
  //     name: "个人中心",
  //     meta: {
  //       title: "个人中心",
  //       icon: "dashboard",
  //       noCache: true,
  //       affix: true,
  //     },
  //   }, ],
  // },
  // {
  //   path: "",
  //   component: Layout,
  //   redirect: "",
  //   children: [{
  //     path: "/login",
  //     component: (resolve) => require(["@/views/login.vue"], resolve),
  //     name: "登录",
  //   }, ],
  // },
  // {
  //   path: "",
  //   component: Layout,
  //   redirect: "/Register",
  //   children: [{
  //     path: "/Register",
  //     component: (resolve) => require(["@/views/Register.vue"], resolve),
  //     name: "注册",
  //   }, ],
  // },
  // {
  //   path: "/404",
  //   component: (resolve) => require(["@/views/error/404.vue"], resolve),
  //   hidden: true,
  // },
  // {
  //   path: "/401",
  //   component: (resolve) => require(["@/views/error/401.vue"], resolve),
  //   hidden: true,
  // },
];

export default new Router({
  // mode: 'history', // 去掉url中的#
  scrollBehavior: () => ({
    y: 0
  }),
  routes: constantRoutes
})
