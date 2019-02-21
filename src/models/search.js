import { searchResult, searchHot, searchSuggest } from '../services/example'

export default {

  namespace: 'search',

  state: {
    searchHot:[],
    searchSuggest:[],
    searchResult:[],
    songCount:0
  },

  // 异步操作，用generator函数去控制时序
  // thunk就是修改action
  effects: {
    // 获取热门搜索
   *searchHot(action, { call,put }){
     let data = yield call(searchHot)
     console.log(data,"...hoot data")
     yield put({
       type:"updataState",
       payload:{
         searchHot:data.data.result.hots
       }
     })
   },
   // 获取搜索建议
   *searchSuggest({payload},{call,put}){
     let result = yield call(searchSuggest,payload)
     console.log(result,"...result",payload)
     // 拼接搜索建议
     let suggest = []
     let res = result.data.result
     res.order.forEach((item,index)=>{
      // 类型拼接到数据里面
      res[item].forEach(value=>{
        value.type = item
      })
      suggest = [...suggest,...res[item]]
     })
     yield put({
       type:"updataState",
       payload:{
        searchSuggest:suggest
       }
     })
   },
   // 获取搜索数据
   *searchData({payload},{call,put}){
     let val = yield call(searchResult,payload)
     console.log(val,"...search val")
     yield put({
       type:"updataState",
       payload:{
        searchResult:val.data.result.songs,
        songCount:val.data.result.songCount
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
