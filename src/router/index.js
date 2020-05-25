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
        name: 'name',
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
    str: 'about',
    tagId: 'companyProfile',
    children: [
      {
        path: 'companyProfile',
        // component: () => import('@/components/about/companyProfile'),
        component: () => import('@/components/base/container'),        
        name: '公司简介',
        noDropdown: false,
        icon: 'notice',
        hidden: false,
        str: 'about',
        tagId: 'companyProfile',
      },
      {
        path: 'speech',
        component: () => import('@/components/about/speech'),
        name: '董事长致辞',
        noDropdown: false,
        icon: 'notice',
        hidden: false,
        str: 'about',
        tagId: 'speech'        
      },
      {
        path: 'companyFramework',
        component: () => import('@/components/about/companyFramework'),
        name: '企业架构',
        noDropdown: false,
        icon: 'notice',
        hidden: false,
        str: 'about',
        tagId: 'companyFramework'             
      },
      {
        path: 'companyCulture',
        component: () => import('@/components/about/companyCulture'),
        name: '企业文化',
        noDropdown: false,
        icon: 'notice',
        hidden: false,
        str: 'about',
        tagId: 'companyCulture'    
      }      
    ]
  },    
]

export const asyncRouterMap = [
  {
    path: '/news',
    component: () => import('@/components/base/layOut/layOut'),
    redirect: '/news/companyNews',
    name: '新闻资讯',
    noDropdown: false,
    icon: 'notice',
    hidden: false,
    str: 'news',
    tagId: 'companyNews',
    children: [
      {
        path: 'companyNews',
        component: () => import('@/components/base/container'),
        name: '企业新闻',
        noDropdown: false,
        icon: 'notice',
        hidden: false,
        str: 'news',
        tagId: 'companyNews'
      },
      {
        path: 'hotNews',
        component: () => import('@/components/base/container'),        
        name: '热点资讯',
        noDropdown: false,
        icon: 'notice',
        hidden: false,
        str: 'news',
        tagId: 'hotNews'
      },
      {
        path: 'industryInformation',
        component: () => import('@/components/base/container'),        
        name: '行业资讯',
        noDropdown: false,
        icon: 'notice',
        hidden: false,
        str: 'news',
        tagId: 'industryInformation'
      },
      {
        path: 'technicalArtical',
        component: () => import('@/components/base/container'),        
        name: '技术文章',
        noDropdown: false,
        icon: 'notice',
        hidden: false,
        str: 'news',
        tagId: 'technicalArtical'
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
    str: 'productShow',
    tagId: 'more',
    children: [
      {
        path: 'more',
        component: () => import('@/components/products/more'),
        name: '多层板',
        hidden: true,
        noDropdown: false,
        icon: 'notice',
        str: 'productShow',
        tagId: 'more'       
      },
      {
        path: 'high',
        component: () => import('@/components/products/high'),
        name: '高频板',
        hidden: true,
        noDropdown: false,
        icon: 'notice',
        str: 'productShow',
        tagId: 'high'         
      },
      {
        path: 'aluminium',
        component: () => import('@/components/products/aluminium'),
        name: '铝基板',
        hidden: true,
        noDropdown: false,
        icon: 'notice',
        str: 'productShow',
        tagId: 'aluminium'           
      },
      {
        path: 'phone',
        component: () => import('@/components/products/phone'),
        name: '手机板',
        hidden: true,
        noDropdown: false,
        icon: 'notice',
        str: 'productShow',
        tagId: 'phone'          
      },
      {
        path: 'double',
        component: () => import('@/components/products/double'),
        name: '双面板',
        hidden: true,
        noDropdown: false,
        icon: 'notice',
        str: 'productShow',
        tagId: 'double'        
      },
      {
        path: 'impedance',
        component: () => import('@/components/products/impedance'),
        name: '阻抗板',
        hidden: true,
        noDropdown: false,
        icon: 'notice',
        str: 'productShow',
        tagId: 'impedance'          
      },
      {
        path: 'special',
        component: () => import('@/components/products/special'),
        name: '特殊工艺板类',
        hidden: true,
        noDropdown: false,
        icon: 'notice',
        str: 'productShow',
        tagId: 'special'          
      }                     
    ]
  },
  {
    path: '/companyDevice',
    component: () => import('@/components/base/layOut/layOut'),
    redirect: '/companyDevice/index',
    name: '公司设备',
    hidden: false,
    noDropdown: true,
    icon: 'notice',
    str: 'companyDevice',
    tagId: 'companyDevice',
    children: [
      {
        path: 'index',
        component: () => import('@/components/companyDevice/index'),
        name: '公司设备',
        icon: 'people',
        noDropdown: true,
        hidden: true,        
        meta: {
          title: '公司设备-首页'
        }
      }
    ]    
  },
  {
    path: '/processCapability',
    component: () => import('@/components/base/layOut/layOut'),
    redirect: '/processCapability/index',
    name: '制程能力',
    hidden: false,
    noDropdown: true,
    icon: 'notice',
    str: 'processCapability',
    tagId: 'processCapability',
    children: [
      {
        path: 'index',
        component: () => import('@/components/processCapability/index'),
        name: '制程能力',
        icon: 'people',
        noDropdown: true,
        hidden: true,        
        meta: {
          title: '制程能力-首页'
        }
      }
    ]        
  },
  {
    path: '/productionLine',
    component: () => import('@/components/base/layOut/layOut'),
    redirect: '/productionLine/index',
    name: '生产流程',
    hidden: false,
    noDropdown: true,
    icon: 'notice',
    str: 'productionLine',
    tagId: 'productionLine',
    children: [
      {
        path: 'index',
        component: () => import('@/components/productionLine/index'),
        name: '生产流程',
        icon: 'people',
        noDropdown: true,
        hidden: false,        
        meta: {
          title: '生产流程-首页'
        }
      }
    ]     
  },    
  {
    path: '/contact',
    component: () => import('@/components/base/layOut/layOut'),
    redirect: '/contact/index',
    name: '联系我们',
    hidden: false,
    noDropdown: true,
    icon: 'notice',
    str: 'contact',
    tagId: 'contact',
    children: [
      {
        path: 'index',
        component: () => import('@/components/contact/index'),
        name: '生产流程',
        icon: 'people',
        noDropdown: true,
        hidden: false,        
        meta: {
          title: '生产流程-首页'
        }
      }
    ]       
  }       
]

export default new Router({
  // mode: 'history', //后端支持可开
  linkActiveClass: 'is-active',
  routes: constantRouterMap
})
