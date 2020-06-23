import request from '@/utils/request'
const BASE_URL = 'http://localhost:3000'

export function fetchList(params) {
  return request({
    url: `${BASE_URL}/blog/list`,
    method: 'get',
    params: {
      ...params
    }
  })
}

export function del(params) {
  return request({
    url: `${BASE_URL}/blog/del`,
    method: 'post',
    data: {
      ...params
    }
  })
}
