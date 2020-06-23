import request from '@/utils/request'
const BASE_URL = 'http://localhost:3000'

export function fecthList() {
  return request({
    url: `${BASE_URL}/swiper/list`,
    method: 'get'
  })
}

export function del(params) {
  return request({
    params: params,
    url: `${BASE_URL}/swiper/del`,
    method: 'get'
  })
}
