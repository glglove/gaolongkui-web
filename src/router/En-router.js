import Vue from 'vue'
import Router from 'vue-router'
import LayOut from '@/components/base/layOut/layOut'
/* layout */
// import Layout from '@/base/layout/Layout'
Vue.use(Router)

export const englishRouterMap = [
    {
      path: '/',
      component: () => import('@/components/base/layOut/layOut'),
      redirect: '/index',
      name: 'HOME',
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
          name: 'HOME',
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
      name: 'ABOUT US',
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
          name: 'Company Profile',
          noDropdown: false,
          icon: 'notice',
          hidden: false,
          str: 'about',
          tagId: 'companyProfile',
        },
        {
          path: 'speech',
          component: () => import('@/components/about/speech'),
          name: 'President Oration',
          noDropdown: false,
          icon: 'notice',
          hidden: false,
          str: 'about',
          tagId: 'speech'        
        },
        {
          path: 'companyFramework',
          component: () => import('@/components/about/companyFramework'),
          name: 'Organization',
          noDropdown: false,
          icon: 'notice',
          hidden: false,
          str: 'about',
          tagId: 'companyFramework'             
        },
        {
          path: 'companyCulture',
          component: () => import('@/components/about/companyCulture'),
          name: 'Company Culture',
          noDropdown: false,
          icon: 'notice',
          hidden: false,
          str: 'about',
          tagId: 'companyCulture'    
        }      
      ]
    },
    {
      path: '/news',
      component: () => import('@/components/base/layOut/layOut'),
      redirect: '/news/companyNews',
      name: 'NEWS',
      noDropdown: false,
      icon: 'notice',
      hidden: false,
      str: 'news',
      tagId: 'companyNews',
      children: [
        {
          path: 'companyNews',
          component: () => import('@/components/base/container'),
          name: 'Company News',
          noDropdown: false,
          icon: 'notice',
          hidden: false,
          str: 'news',
          tagId: 'companyNews'
        },
        // {
        //   path: 'hotNews',
        //   component: () => import('@/components/base/container'),        
        //   name: '热点资讯',
        //   noDropdown: false,
        //   icon: 'notice',
        //   hidden: false,
        //   str: 'news',
        //   tagId: 'hotNews'
        // },
        {
          path: 'industryInformation',
          component: () => import('@/components/base/container'),        
          name: 'Industry News',
          noDropdown: false,
          icon: 'notice',
          hidden: false,
          str: 'news',
          tagId: 'industryInformation'
        },
        // {
        //   path: 'technicalArtical',
        //   component: () => import('@/components/base/container'),        
        //   name: '技术文章',
        //   noDropdown: false,
        //   icon: 'notice',
        //   hidden: false,
        //   str: 'news',
        //   tagId: 'technicalArtical'
        // }      
      ]
    }, 
    {
      path: '/productShow',
      component: () => import('@/components/base/layOut/layOut'),
      redirect: '/productShow/more',
      name: 'PRODUCTS',
      noDropdown: false,
      icon: 'notice',
      hidden: false,
      str: 'productShow',
      tagId: 'more',
      children: [
        {
          path: 'more',
          component: () => import('@/components/products/more'),
          name: 'Multiply Wood',
          hidden: true,
          noDropdown: false,
          icon: 'notice',
          str: 'productShow',
          tagId: 'more'       
        },
        {
          path: 'high',
          component: () => import('@/components/products/high'),
          name: 'High Frequency Board',
          hidden: true,
          noDropdown: false,
          icon: 'notice',
          str: 'productShow',
          tagId: 'high'         
        },
        {
          path: 'aluminium',
          component: () => import('@/components/products/aluminium'),
          name: 'Aluminum Foundation Plate',
          hidden: true,
          noDropdown: false,
          icon: 'notice',
          str: 'productShow',
          tagId: 'aluminium'           
        },
        {
          path: 'phone',
          component: () => import('@/components/products/phone'),
          name: 'Mobile Board',
          hidden: true,
          noDropdown: false,
          icon: 'notice',
          str: 'productShow',
          tagId: 'phone'          
        },
        {
          path: 'double',
          component: () => import('@/components/products/double'),
          name: 'Doubling Plate',
          hidden: true,
          noDropdown: false,
          icon: 'notice',
          str: 'productShow',
          tagId: 'double'        
        },
        {
          path: 'impedance',
          component: () => import('@/components/products/impedance'),
          name: 'Impedance Board',
          hidden: true,
          noDropdown: false,
          icon: 'notice',
          str: 'productShow',
          tagId: 'impedance'          
        },
        // {
        //   path: 'special',
        //   component: () => import('@/components/products/special'),
        //   name: '特殊工艺板类',
        //   hidden: true,
        //   noDropdown: false,
        //   icon: 'notice',
        //   str: 'productShow',
        //   tagId: 'special'          
        // }                     
      ]
    },
    {
      path: '/companyDevice',
      component: () => import('@/components/base/layOut/layOut'),
      redirect: '/companyDevice/index',
      name: 'EQUIPMENT',
      hidden: false,
      noDropdown: true,
      icon: 'notice',
      str: 'companyDevice',
      tagId: 'companyDevice',
      children: [
        {
          path: 'index',
          component: () => import('@/components/companyDevice/index'),
          name: 'EQUIPMENT',
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
      name: 'PROCESS',
      hidden: false,
      noDropdown: true,
      icon: 'notice',
      str: 'processCapability',
      tagId: 'processCapability',
      children: [
        {
          path: 'index',
          component: () => import('@/components/processCapability/index'),
          name: 'PROCESS',
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
      name: 'WORK FLOW',
      hidden: false,
      noDropdown: true,
      icon: 'notice',
      str: 'productionLine',
      tagId: 'productionLine',
      children: [
        {
          path: 'index',
          component: () => import('@/components/productionLine/index'),
          name: 'WORK FLOW',
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
      name: 'CONTACT US',
      hidden: false,
      noDropdown: true,
      icon: 'notice',
      str: 'contact',
      tagId: 'contact',
      children: [
        {
          path: 'index',
          component: () => import('@/components/contact/index'),
          name: 'CONTACT US',
          icon: 'people',
          noDropdown: true,
          hidden: false,        
          meta: {
            title: '联系我们-首页'
          }
        }
      ]       
    }         
  ]