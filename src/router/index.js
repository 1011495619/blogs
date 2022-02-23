import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
// import Home from '../views/backdrop/backdrop.vue'
const bjImg = () => import('../views/backdrop/backdrop.vue')
const article = () => import('../views/article/article.vue')
const archive = () => import('../views/archive/archive.vue')
const message = () => import('../views/message/message.vue')
const aticlemd = () => import('../views/aticlemd/aticlemd.vue')
// const articleMd = () => import('../views/archive/ArticleMd.vue')
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: bjImg,
  },
  {
    path: '/article',
    name: 'article',
    component: article
  },
  {
    path: '/archive',
    name: 'archive',
    component: archive,
  },
  {
    path: '/message',
    name: 'message',
    component: message,
  },
  {
    path: '/aticlemd/:id',
    name: 'aticlemd',
    component: aticlemd,
    meta: {
      keepAlive: true, //此组件需要被缓存
      isBack: false, //用于判断上一个页面是哪个
    }
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
