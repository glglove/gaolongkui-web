import router from './router'
import store from './store'
import { Message , Notify } from 'element-ui'
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css'// Progress 进度条样式
import { getToken } from '@/utils/auth' // 验权
// // permissiom judge
// function hasPermission (roles, permissionRoles) {
//   if (roles.indexOf('admin') >= 0) return true // admin权限 直接通过
//   if (!permissionRoles) return true
//   return roles.some(role => permissionRoles.indexOf(role) >= 0)
// }
// register global progress.
NProgress.configure({ showSpinner: false })
const whiteList = ['/login', '/authredirect','/index']// 不重定向白名单

if(store.getters.currentLanguage == 'zh'){
  store.dispatch("GenerateRoutes").then(res => {
    // 生成可访问的路由表
    // router.addRoutes(store.getters.addRouters) // 动态添加可访问路由表
    console.log(router)
  }) 
}else {
  store.dispatch("GenerateRoutes_english").then(res => {
    // 生成可访问的路由表
    // router.addRoutes(store.getters.addRouters) // 动态添加可访问路由表
    console.log(router)
  })   
} 

router.beforeEach((to, from, next) => {
  // 加载路由
  NProgress.start() // 开启Progress
  if (getToken()) { // 判断是否有token
    if (to.path === '/login') {
      next({ path: '/' })
      NProgress.done() // router在hash模式下 手动改变hash 重定向回来 不会触发afterEach 暂时hack方案
    } else {
      if (!store.getters.name) { // 判断当前用户是否已拉取完user_info信息
        store.dispatch('GetUserInfo').then(res => { // 拉取user_info
          // const roles = res.data.Data.TokenId
          store.dispatch('GenerateRoutes').then(() => {
            // 生成可访问的路由表
            router.addRoutes(store.getters.addRouters) // 动态添加可访问路由表
            next({...to, replace: true}) // hack方法 确保addRoutes已完成
          })
        }).catch(() => {
          store.dispatch('LogOut').then(() => {
            Notify({mes: '验证失败,请重新登录', timeout: 3000})
            next({ path: '/login' })
          })
        })
      } else {
        next()
      }
    }
  } else {
    // debugger
    if (whiteList.indexOf(to.path) !== -1) { // 在免登录白名单，直接进入
      next()
    } else {
      // next('/login') // 否则全部重定向到登录页
      next()
      NProgress.done() // router在hash模式下 手动改变hash 重定向回来 不会触发afterEach 暂时hack方案
    }
  }
})

router.afterEach(() => {
  NProgress.done() // 结束Progress
})
