import * as types from '../mutation-types'
import { constantRouterMap, asyncRouterMap } from '@/router/index'
import { englishRouterMap } from '@/router/En-router'
import { chinesRouterMap } from '@/router/ZH-router'
import router from '../../router'

/**
 * 通过meta.role判断是否与当前用户权限匹配
 * @param roles
 * @param route
 */
// function hasPermission (roles, route) {
//   if (route.meta && route.meta.role) {
//     return roles.some(role => route.meta.role.indexOf(role) >= 0)
//   } else {
//     return true
//   }
// }

/**
 * 递归过滤异步路由表，返回符合用户角色权限的路由表
 * @param asyncRouterMap
 * @param roles
 */
// function filterAsyncRouter (asyncRouterMap, roles) {
//   const accessedRouters = asyncRouterMap.filter(route => {
//     if (hasPermission(roles, route)) {
//       if (route.children && route.children.length) {
//         route.children = filterAsyncRouter(route.children, roles)
//       }
//       return true
//     }
//     return false
//   })
//   return accessedRouters
// }

const permission = {
  state: {
    routers: {},   // 所有的路由
    addRouters: []  // 异步添加的路由
  },
  mutations: {
    [types.SET_ROUTERS] (state, routers) {
      state.routers = routers
    },
    [types.SET_ADD_ROUTERS] (state, routers) {
      state.addRouters = routers
    }
  },
  actions: {
    GenerateRoutes ({ commit, state }) {
      return new Promise((resolve, reject) => {
        // const { roles } = data
        // console.log('datta', data)
        // let accessedRouters = asyncRouterMap.concat(constantRouterMap)
        // if (data) {
        //   accessedRouters = asyncRouterMap
        // } else {
        //   accessedRouters = filterAsyncRouter(asyncRouterMap, roles)
        // }
        // let accessedRouters = constantRouterMap.concat(asyncRouterMap)    
        // commit(types.SET_ROUTERS, accessedRouters)
        commit(types.SET_ROUTERS, chinesRouterMap)
        // commit(types.SET_ADD_ROUTERS, asyncRouterMap)
        commit(types.SET_ADD_ROUTERS, chinesRouterMap)
        resolve()
      })
    },
    GenerateRoutes_english ({ commit, state }) {
      return new Promise((resolve, reject) => {
        // const { roles } = data
        // console.log('datta', data)
        // let accessedRouters = asyncRouterMap.concat(constantRouterMap)
        // if (data) {
        //   accessedRouters = asyncRouterMap
        // } else {
        //   accessedRouters = filterAsyncRouter(asyncRouterMap, roles)
        // }

        // let accessedRouters = constantRouterMap.concat(asyncRouterMap)  
        // let newEnglishRoute = Object.assign(accessedRouters, englishRouterMap)
        // router.options.routes = englishRouterMap
        commit(types.SET_ROUTERS, englishRouterMap)
        commit(types.SET_ADD_ROUTERS, englishRouterMap)
        resolve()
      })
    },    
  }
}

export default permission
