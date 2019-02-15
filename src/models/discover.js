import { getBanner, getSongList } from '../services/example'

export default {

  namespace: 'discover',

  state: {
    banner:[],
    songsList:[]
  },

  // 异步操作，用generator函数去控制时序
  // thunk就是修改action
  effects: {
    // 写入方法
    // call 改变this指向，put相当于dispatch，获取到数据有put出去
    // banner轮播数据
    *getBanner({ payload }, { call, put }) {
      // 两种写法
      // let data = yield call(getBanner)
      let data = yield getBanner()
      // console.log(data,"...data")
      yield put({
        type:"banner",
        payload:{
          banner:data.data.banners
        }
      })
    },
    // 推荐歌单列表
    *getSongList({payload},{ call,put }) {
      let list = yield getSongList()
      // console.log("list...",list)
      yield put({
        type:"songsList",
        payload:{
          songsList:list.data.result
        }
      })
    }
  },

  // 同步操作，纯函数的方式去更新数据
  reducers: {
    // banner轮播数据
    banner(state, action) {
      return { ...state, ...action.payload };
    },
    // 推荐歌单数据
    songsList(state, action) {
      return {...state, ...action.payload }
    }
  },

};
