import { getBanner } from '../services/example'

export default {

  namespace: 'discover',

  state: {
    banner:[]
  },

  // 异步操作，用generator函数去控制时序
  // thunk就是修改action
  effects: {
    // 写入方法
    // call 改变this指向，put相当于dispatch，获取到数据有put出去
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
    }
    // *fetch({ payload }, { call, put }) {  // eslint-disable-line
    //   yield put({ type: 'save' });
    // },
  },

  // 同步操作，纯函数的方式去更新数据
  reducers: {
    banner(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
