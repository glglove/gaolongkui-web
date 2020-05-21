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
    component: () => import('@/components/base/layOut/layOut'),
    redirect: '/index',
    name: '首页',
    icon: 'people',
    noDropdown: true,
    hidden: false,    
    meta: {
      title: '首页'
    },
    children: [
      {
        path: 'index',
        // component: () => import('@/components/base/layOut/layOut'),
        name: '简述',
        icon: 'people',
        noDropdown: true,
        hidden: false,        
        meta: {
          title: '首页-简述'
        }
      },  
    ]
  }
]

export const asyncRouterMap = [
  {
    path: '/about',
    component: (resolve) => import('@/components/about/about').then((module) => { resolve(module) }),
    name: '关于我们',
    icon: 'notice',
    hidden: false,
    children: [
      {
        path: 'companyProfile',
        component: (resolve) => import('@/components/about/companyProfile').then((module) => { resolve(module) }),
        name: '公司简介',
        hidden: true
      },
      {
        path: 'speech',
        component: (resolve) => import('@/components/about/speech').then((module) => { resolve(module) }),
        name: '董事长致辞',
        hidden: true
      },
      {
        path: 'companyFramework',
        component: (resolve) => import('@/components/about/companyFramework').then((module) => { resolve(module) }),
        name: '企业架构',
        hidden: true
      },
      {
        path: 'companyCulture',
        component: (resolve) => import('@/components/about/companyCulture').then((module) => { resolve(module) }),
        name: '企业文化',
        hidden: true
      },      
    ]
  }
]

export default new Router({
  // mode: 'history', //后端支持可开
  routes: constantRouterMap
})
