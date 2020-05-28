import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistense from 'vuex-persistedstate' // vuex 数据持久化，防止刷新后vuex中数据消失
import app from './modules/app'
import user from './modules/user'
import permission from './modules/permission'
import * as getters from './getters'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const vuexLocal = new VuexPersistense({
  storage: localStorage,
  reducer: val => {
    return {
      //引入app模板，对象里面可配置需要持久化的status
      app: {
        currentLanguage: val.app.currentLanguage,
        leftSidebar: val.app.leftSidebar,
        // leftParentSidebar: val.app.leftParentSidebar
        globalStrFlag: val.app.globalStrFlag,
        globalTagId: val.app.globalTagId
      },
      permission: {
        addRouters: val.permission.addRouters,
        routers: val.permission.routers
      }
    }
  }
})

const store = new Vuex.Store({
  modules: {
    app,
    user,
    permission
  },
  getters,
  // strict: debug,  // 加了严格模式动态挂载路由会报错，但不影响功能
  plugins: debug ? [createLogger(), vuexLocal] : [vuexLocal]
})

export default store
