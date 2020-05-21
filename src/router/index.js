import Vue from 'vue'
import Router from 'vue-router'
/* layout */
// import Layout from '@/base/layout/Layout'
Vue.use(Router)

/**
* icon : 对应的sidebar icon图标
* hidden : 如果 `hidden:true` 将不现实在siderbar中
* redirect : 重定向
* noDropdown : 如果 `noDropdown:true` 将没有子菜单
**/
export const constantRouterMap = [
  {
    path: '/',
    redirect: '/home',
    meta: {
      title: '首页'
    }
  },
  {
    path: '/login',
    component: () => import('@/components/base/layOut/layOut'),
    meta: {
      title: '登录'
    }
  },  
]

export const asyncRouterMap = [
  // {
  //   path: '/notice',
  //   component: (resolve) => import('@/components/notice/index').then((module) => { resolve(module) }),
  //   name: '公告',
  //   icon: 'notice',
  //   hidden: false,
  //   children: [
  //     {
  //       path: 'noticeDetail',
  //       component: (resolve) => import('@/components/notice/notice-detail').then((module) => { resolve(module) }),
  //       name: 'noticeDetail',
  //       hidden: true
  //     }
  //   ]
  // }
]

export default new Router({
  // mode: 'history', //后端支持可开
  routes: constantRouterMap
})
