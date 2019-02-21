import { getSongDetaile } from '../services/example'

export default {

  namespace: 'play',

  state: {
   songDetaile:[]
  },

  // 异步操作，用generator函数去控制时序
  // thunk就是修改action
  effects: {
    *getSongDetaile({payload},{call,put}){
      let data = yield call(getSongDetaile,payload.ids)
      console.log("data detaile...",data)
      yield put({
        type:"updataState",
        payload:{
          songDetaile:data.data.songs
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
