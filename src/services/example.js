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

// 搜索
export function searchResult(keywords){
  return request(`/search?keywords= ${keywords}`)
}

// 热搜
export function searchHot(){
  return request("/search/hot")
}

// 搜索建议
export function searchSuggest(keywords){
  return request(`/search/suggest?keywords=${keywords}`)
}

// 歌曲详情
export function getSongDetaile(ids){
  return request(`/song/detail?ids=${ids}`)
}

// 获取播放列表
export function songUrl(ids){
  return request(`/song/url?id=${ids}`)
}