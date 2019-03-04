import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

// 首页 这种写法是当children子路由深入到三层之后 简单写法不能用 拿这个
// vue很多数据当三层之后就会默认不刷新 是个bug
const Home = (resolve) => {
  import('@/views/Home/Home.vue').then((module) => {
    resolve(module)
  })
}

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', component: Home },
    {
      path: '/registry',
      component: () => import('./views/Registry/registry.vue')
    },
    {
      path: '/login',
      component: () => import('./views/Login/login.vue')
    },
  ]
})
