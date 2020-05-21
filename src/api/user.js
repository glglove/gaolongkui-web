/**
 * Created by Administrator on 2017/11/13.
 * function : xxxxx
 */
import axios from 'axios'
import qs from 'qs'

/**
 *
 * @param UserName 用户名
 * @param pwd 密码
 * @returns {Promise.<TResult>}
 */
export function getUserInfo (TokenId) {
  const url = 'http://192.168.1.104/API/Account'
  let appId, appKey
  return axios.post(url, qs.stringify({
    Method: 'getUser',
    TokenId,
    appId,
    appKey
  })).then((res) => {
    return Promise.resolve(res)
  })
}
