import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: "/",
  //   reactive: "/",
  //   name: "index",
  //   component: () => import("../views/Index"),

  // },
  {
    path: "/",
    reactive: "/",
    name: "home",
    component: () => import("../views/Home")
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/Login")
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
