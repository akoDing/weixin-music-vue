import request from '@/utils/request'
const BASE_URL = 'http://localhost:3000'

export function fetchList(params) {
  return request({
    params,
    url: `${BASE_URL}/playlist/list`,
    method: 'get'
  })
}

export function fetchById(params) {
  return request({
    params,
    url: `${BASE_URL}/playlist/getById`,
    method: 'get'
  })
}

export function update(params) {
  return request({
    url: `${BASE_URL}/playlist/updatePlaylist`,
    data: {
      ...params
    },
    method: 'post'
  })
}

export function del(params) {
  return request({
    params,
    url: `${BASE_URL}/playlist/del`,
    method: 'get'
  })
}
