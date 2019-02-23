import { getSongDetaile, songUrl } from '../services/example'

export default {

  namespace: 'play',

  state: {
   songDetaile:[],// 当前播放歌曲详情
   songs:[] // 播放列表
  },

  // 异步操作，用generator函数去控制时序
  // thunk就是修改action
  effects: {
    *getSongDetaile({payload},{call,put}){
      let data = yield call(getSongDetaile,payload.ids)
      let urls = yield call(songUrl,payload.ids)
      // console.log("data detaile...",data)
      console.log("data detaile...",urls)
      data.data.songs.forEach(item=>{
        urls.data.data.forEach(value=>{
          if(item.id === value.id){
            item.url = value.url
          }
        })
      })
      yield put({
        type:"updataState",
        payload:{
          songDetaile:data.data.songs[0],
          songs:data.data.songs
        }
      })
    }
  },

  // 同步操作，纯函数的方式去更新数据
  reducers: {
    updataState(state,{payload}){
      return {...state,...payload}
    }
  },

};
