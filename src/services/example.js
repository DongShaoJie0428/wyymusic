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