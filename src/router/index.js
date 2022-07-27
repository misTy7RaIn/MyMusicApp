import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: "/",
    reactive: "/",
    name: "index",
    component: () => import("../views/Index"),
    children: [{
        path: "/home",
        reactive: "home",
        name: "home",
        component: () => import("../views/Home")
      },
      {
        path: "/my",
        name: "my",
        component: () => import("../views/My")
      },
      {
        path: "/podcast",
        name: "podcast",
        component: () => import("../views/Podcast")
      },
      {
        path: "/focus-on",
        name: "focus-on",
        component: () => import("../views/Focus-on")
      },
      {
        path: "/community",
        name: "community",
        component: () => import("../views/Community")
      },
    ]

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
