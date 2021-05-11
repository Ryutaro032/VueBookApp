import Vue from 'vue'
import VueRouter from 'vue-router'
import Top from '../views/Top.vue'
import Category from '../views/Category.vue'
import TopPickup from '../views/TopPickup.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Top',
    component: Top
  },
  {
    path: '/TopPickup',
    name: 'TopPickup',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: TopPickup
  },
  {
    path: '/Category',
    name: 'Category',
    component: Category
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
