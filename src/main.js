// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import 'babel-polyfill'
import App from './App'
import ElementUI from 'element-ui' // element组件
// import './element-theme/index.css' // element样式
import 'element-ui/lib/theme-chalk/index.css'   // 引入element样式
import VueI18n from 'vue-i18n'  // 中英文切换
import { messages } from '@/utils/chinesToEnglish'

import router from './router' // vue-router 路由
import store from './store' // vuex状态管理
import './icons' // 字体图标
import './permission' // 权限

import 'lib-flexible/flexible.js'

import ContainerCmp from '@/components/base/container'
Vue.component("containerCmp", ContainerCmp)

import BdsHareCmp from '@/components/base/bdshare'
Vue.component("bdsHareCmp", BdsHareCmp)

import AddThisHareCmp from '@/components/base/addthisShare'
Vue.component("addthisHareCmp", AddThisHareCmp)

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueI18n)
console.log("-----------------",store.getters.currentLanguage)
const i18n = new VueI18n({
  locale: store.getters.currentLanguage, // 语言标识
  // locale: 'en', // 语言标识  zh    en
  messages,
  silentTranslationWarn: false, // 错误提示 false 提示，true 不提示
})

Vue.prototype.$bus = new Vue()
/* eslint-disable no-new */
new Vue({
  // el: '#app',
  render: h => h(App),
  router,
  store,
  i18n
}).$mount("#app")
