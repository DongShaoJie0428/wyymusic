import request from '../utils/request';

export function query() {
  return request('/api/users');
}

// banner轮播
export function getBanner() {
  return request('/banner')
}

// 推荐歌单
export function getSongList() {
  return request('/personalized')
}

// 手机号登陆接口
export function login(phone, password){
  return request(`/login/cellphone?phone=${phone}&password=${password}`)
}

// 登陆状态
export function loginStatus(){
  return request('/login/status')
}