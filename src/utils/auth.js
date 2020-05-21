import Cookies from 'js-cookie'
import store from '../store'

const TokenKey = 'H5-Token'

export function getToken () {
  return Cookies.get(TokenKey)
}

export function setToken (token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken () {
  return Cookies.remove(TokenKey)
}

export function getCreatorName () {
  return store.getters.name
}

export function getCreator () {
  return store.getters.userCode
}
