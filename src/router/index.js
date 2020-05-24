import Vue from 'vue'
import Router from 'vue-router'
import LayOut from '@/components/base/layOut/layOut'
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
        component: () => import('@/components/home/home'),
        name: '简述',
        icon: 'people',
        noDropdown: true,
        hidden: false,        
        meta: {
          title: '首页-简述'
        }
      },  
    ]
  },
  {
    path: '/about',
    component: LayOut,
    redirect: '/about/companyProfile',
    name: '关于我们',
    noDropdown: false,
    icon: 'notice',
    hidden: false,
    children: [
      {
        path: 'companyProfile',
        // component: () => import('@/components/about/companyProfile'),
        component: () => import('@/components/base/container'),        
        name: '公司简介',
        hidden: true
      },
      {
        path: 'speech',
        component: () => import('@/components/about/speech'),
        name: '董事长致辞',
        hidden: true
      },
      {
        path: 'companyFramework',
        component: () => import('@/components/about/companyFramework'),
        name: '企业架构',
        hidden: true
      },
      {
        path: 'companyCulture',
        component: () => import('@/components/about/companyCulture'),
        name: '企业文化',
        hidden: true
      }      
    ]
  },    
]

export const asyncRouterMap = [
  {
    path: '/news',
    component: () => import('@/components/base/layOut/layOut'),
    redirect: '/news/companyProfile',
    name: '新闻资讯',
    noDropdown: false,
    icon: 'notice',
    hidden: false,
    children: [
      {
        path: 'companyNews',
        // component: () => import('@/components/about/companyProfile'),
        component: () => import('@/components/base/container'),
        name: '企业新闻',
        hidden: true
      },
      {
        path: 'hotNews',
        // component: () => import('@/components/about/speech'),
        component: () => import('@/components/base/container'),        
        name: '热点资讯',
        hidden: true
      },
      {
        path: 'industryInformation',
        // component: () => import('@/components/about/companyFramework'),
        component: () => import('@/components/base/container'),        
        name: '行业资讯',
        hidden: true
      },
      {
        path: 'technicalArtical',
        // component: () => import('@/components/about/companyCulture'),
        component: () => import('@/components/base/container'),        
        name: '技术文章',
        hidden: true
      }      
    ]
  }, 
  {
    path: '/productShow',
    component: () => import('@/components/base/layOut/layOut'),
    redirect: '/productShow/more',
    name: '产品展示',
    noDropdown: false,
    icon: 'notice',
    hidden: false,
    children: [
      {
        path: 'more',
        component: () => import('@/components/products/more'),
        name: '多层板',
        hidden: true,
        noDropdown: false,
        icon: 'notice'
      },
      {
        path: 'high',
        component: () => import('@/components/products/high'),
        name: '高频板',
        hidden: true,
        noDropdown: false,
        icon: 'notice',
      },
      // {
      //   path: 'aluminium',
      //   component: () => import('@/components/products/aluminium'),
      //   name: '铝基板',
      //   hidden: true
      // },
      // {
      //   path: 'phone',
      //   component: () => import('@/components/products/phone'),
      //   name: '手机板',
      //   hidden: true
      // },
      // {
      //   path: 'double',
      //   component: () => import('@/components/products/double'),
      //   name: '双面板',
      //   hidden: true
      // },
      // {
      //   path: 'impedance',
      //   component: () => import('@/components/products/impedance'),
      //   name: '阻抗板',
      //   hidden: true
      // },
      // {
      //   path: 'special',
      //   component: () => import('@/components/products/special'),
      //   name: '特殊工艺板类',
      //   hidden: true
      // }                     
    ]
  },
  {
    path: '/companyDevice',
    component: () => import('@/components/base/layOut/layOut'),
    name: '公司设备',
    noDropdown: true,
    icon: 'notice',
    hidden: false
  },
  {
    path: '/processCapability',
    component: () => import('@/components/base/layOut/layOut'),
    name: '制程能力',
    noDropdown: true,
    icon: 'notice',
    hidden: false
  },
  {
    path: '/productionLine',
    component: () => import('@/components/base/layOut/layOut'),
    name: '生产流程',
    noDropdown: true,
    icon: 'notice',
    hidden: false
  },    
  {
    path: '/contact',
    component: () => import('@/components/base/layOut/layOut'),
    name: '联系我们',
    noDropdown: true,
    icon: 'notice',
    hidden: false
  }       
]

export default new Router({
  // mode: 'history', //后端支持可开
  linkActiveClass: 'is-active',
  routes: constantRouterMap
})
