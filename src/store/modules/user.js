/* eslint-disable prefer-promise-reject-errors */
import { loginByUsername, getUserInfo } from '@/api/login'
import { getToken, setToken, removeToken } from '@/utils/auth'
import * as types from '../mutation-types'

const user = {
  state: {
    userType: '',
    status: '',
    userCode: '',
    companyCode: '',
    token: getToken(),
    name: '',
    avatar: '',
    setting: {
      articlePlatform: []
    }
  },

  mutations: {
    [types.SET_USER_TYPE] (state, userType) {
      state.userType = userType
    },
    [types.SET_USER_CODE] (state, code) {
      state.userCode = code
    },
    [types.SET_COMPANY_CODE] (state, code) {
      state.companyCode = code
    },
    [types.SET_TOKEN] (state, token) {
      state.token = token
    },
    [types.SET_SETTING] (state, setting) {
      state.setting = setting
    },
    [types.SET_STATUS] (state, status) {
      state.status = status
    },
    [types.SET_NAME] (state, name) {
      state.name = name
    },
    [types.SET_AVATAR] (state, avatar) {
      state.avatar = avatar
    }
  },

  actions: {
    // 用户名登录
    LoginByUsername ({ commit }, userInfo) {
      const username = userInfo.username.trim()
      return new Promise((resolve, reject) => {
        loginByUsername(username, userInfo.password, userInfo.businessCode).then(response => {
          const data = response.data.Data
          setToken(response.data.Data.TokenId)
          commit(types.SET_TOKEN, data.TokenId)
          resolve(response.data.State)
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 获取用户信息
    GetUserInfo ({ commit, state }) {
      return new Promise((resolve, reject) => {
        let t = getToken()
        if (typeof t === 'object') {
          t = t['Admin-Token']
        }
        getUserInfo(t).then(response => {
          if (!response.data) {
            reject('error')
          }
          const data = response.data.Data
          commit(types.SET_USER_TYPE, data.UserType)
          commit(types.SET_NAME, data.UserName)
          commit(types.SET_USER_CODE, data.EmployeeId)
          commit(types.SET_COMPANY_CODE, data.CompanyCode)
          commit(types.SET_AVATAR, data.UserName)
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 登出
    LogOut ({ commit }) {
      return new Promise((resolve, reject) => {
        commit(types.SET_TOKEN, '')
        removeToken()
        resolve()
      })
    }
  }
}

export default user
