import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
const Index =() =>import('../views/index/index.vue')
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    // 重定向（登录）
    {
      path: '/',
      redirect:'/index',
    },
    {
      path: '/index',
      name: 'index',
      component: Index
    }
  ]
})
