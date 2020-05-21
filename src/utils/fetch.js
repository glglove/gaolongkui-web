import axios from 'axios'
import { getToken } from '@/utils/auth'
import qs from 'qs'
import store from '../store'

// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API, // api的base_url
  timeout: 5000                  // 请求超时时间
})
let appId, appKey
// request拦截器
service.interceptors.request.use(config => {
  const data = config.data || {}
  if (config.method === 'post' && !config.noQS && config.data.Method !== 'logon') {
    if (config.module === 'workFlow') {
      config.data = qs.stringify(Object.assign(data, {
        'TokenId': getToken(),
        'CompanyCode': store.getters.companyCode,
        'UserId': store.getters.userCode
      }))
      config.withCredentials = false
    } else {
      config.data = qs.stringify(Object.assign(data, {
        'TokenId': getToken(),
        'CompanyCode': store.getters.companyCode,
        appId,
        appKey
      }))
    }
  } else if (config.data.Method === 'logon') {
    config.data = qs.stringify(data)
  }
  return config
}, error => {
  // Do something with request error
  Notify({mes: '请求超时，请重试！', timeout: 3000}) // for debug
  Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
  response => response,
  error => {
    return Promise.reject(error)
  }
)

export default service
