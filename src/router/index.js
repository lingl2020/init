import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import pathBeaconAction from '../utils/pathBeaconAction'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/charts',
    name: 'Charts',
    component: () => import(/* webpackChunkName: "charts" */'../views/Charts.vue')
  }
]



const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.afterEach((to, from) => {
  console.log(from)
  const path = to.path
  if (to.path !== '/login') {
    pathBeaconAction('',path)
  }
})

export default router
