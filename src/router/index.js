import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home,
    alias: '*'
  },
  {
    path: '/sign-in',
    component: () => import('../views/SignIn.vue')
  },
  {
    path: '/sign-up',
    component: () => import('../views/SignUp.vue')
  },
  {
    path: '/:sub/:id',
    component: () => import('../views/Blog.vue')
  },
  {
    path: '/kontak',
    component: () => import('../views/Contact.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
