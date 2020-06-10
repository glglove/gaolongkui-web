import Cookies from 'js-cookie'
import * as types from '../mutation-types'

const app = {
  state: {
    isPc: true,
    sidebar: {
      opened: !+Cookies.get('sidebarStatus')
    },
    visitedViews: [],
    currentLanguage: 'zh', // 中文： zh   英文: en,
    globalStrFlag: '',
    globalTagId: '',
    leftSidebar: [],
    leftParentSidebar: null,
    isShowVerticalNav: false, 
  },
  mutations: {
    [types.SET_ISPC] (state, flag) {
      state.isPc = flag
    },
    [types.SET_TOGGLE_SIDEBAR] (state, sidebarStatus) {
      state.sidebar.opened = sidebarStatus
    },
    [types.SET_VISITED_VIEWS] (state, view) {
      state.visitedViews = view
    },
    [types.SET_LANGUAGE] ( state, language ) {
      state.currentLanguage = language
    },
    [types.SET_LEFTSIDEBAR] (state, leftSidebar) {
      state.leftSidebar = leftSidebar
    },
    [types.SET_LEFTPARENT_SIDEBAR] (state, leftParentSidebar) {
      state.leftParentSidebar = leftParentSidebar
    },
    [types.SET_GLOBAL_STRFLAG] (state, strFlag) {
      state.globalStrFlag = strFlag
    },
    [types.SET_GLOBAL_TAGID] (state, tagId) {
      state.globalTagId = tagId
    },
    [types.SET_VERTICAL_NAV_SHOW] (state, flag) {
      state.isShowVerticalNav = flag
    }   
  },
  actions: {
    setIsPc ( {commit, state}, flag) {
      commit(types.SET_ISPC, flag)
    },
    // 切换左侧导航栏
    ToggleSideBar ({ commit, state }) {
      if (state.sidebar.opened) {
        Cookies.set('sidebarStatus', 1)
      } else {
        Cookies.set('sidebarStatus', 0)
      }
      commit(types.SET_TOGGLE_SIDEBAR, !state.sidebar.opened)
    },
    // 增加选中tag
    addVisitedViews ({ commit, state }, view) {
      let arr = state.visitedViews.slice()
      if (arr.some(v => v.path === view.path)) return
      arr.push({ name: view.name, path: view.path })
      commit(types.SET_VISITED_VIEWS, arr)
    },
    // 删除选中tag
    delVisitedViews ({ commit, state }, view) {
      let index
      let arr = state.visitedViews.slice()
      for (const [i, v] of arr.entries()) {
        if (v.path === view.path) {
          index = i
          break
        }
      }
      arr.splice(index, 1)
      return new Promise((resolve) => {
        commit(types.SET_VISITED_VIEWS, arr)
        resolve([...arr])
      })
    },
    // 设置语言
    setLanguage ({commit, state }, language){
      commit(types.SET_LANGUAGE, language)
    },
    //设置当前的sidebar
    setLeftSidebar ({commit, state}, leftSidebar){
      debugger
      commit(types.SET_LEFTSIDEBAR, leftSidebar)
    },
    setLeftParentSidebar ({ commit, state }, leftParentSidebar ) {
      debugger
      commit(types.SET_LEFTPARENT_SIDEBAR, leftParentSidebar)
    },
    // 设置当前的 strFlag
    setGlobalStrFlag ({ commit, state }, strFlag) {
      commit(types.SET_GLOBAL_STRFLAG, strFlag)
    },
    // 设置当前的 strFlag
    setGlobalTagId ({ commit, state }, tagId) {
      commit(types.SET_GLOBAL_TAGID, tagId)
    },
    // 设置 手机端当前是否显示导航菜单
    setVerticalNavShow ( {commit, state}, flag ) {
      commit(types.SET_VERTICAL_NAV_SHOW, flag)
    } 
  }
}

export default app
