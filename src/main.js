// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import 'babel-polyfill'
import App from './App'
import ElementUI from 'element-ui' // element组件
// import './element-theme/index.css' // element样式
import 'element-ui/lib/theme-chalk/index.css'   // 引入element样式
import { Message, Notify } from 'element-ui'

import router from './router' // vue-router 路由
import store from './store' // vuex状态管理
import './icons' // 字体图标
import './permission' // 权限

import ContainerCmp from '@/components/base/container'
Vue.component("containerCmp", ContainerCmp)

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.$bus = new Vue()
/* eslint-disable no-new */
new Vue({
  // el: '#app',
  render: h => h(App),
  router,
  store
}).$mount("#app")
