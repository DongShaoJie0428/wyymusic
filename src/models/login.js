import {login } from '../services/example'
import {setToken, getToken} from '../utils/index'
import { routerRedux } from 'dva/router';

export default {
  // 模块的命名空间
  namespace: 'login',

  state: {
    status: '', // ok表示登陆成功，fail表示登陆失败
    account: {}
  },

  // 监听页面切换
  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
      return history.listen(({ pathname }) => {
        console.log('pathname...', pathname);
        if (pathname.indexOf('/login') === -1) {
          // 做token检测
          if (!getToken()){
            // 利用redux做路由跳转
            dispatch(routerRedux.replace({
              pathname: `/login?redirect=${encodeURIComponent(pathname)}`,
            }))
          }
        }
      });
    },
  },

  // 异步操作，用generator函数去控制时序
  effects: {
    *login({payload}, {call, put}) {
      console.log('pasdasj:',payload);
      let res = yield call(login, payload.phoneNum, payload.passWord);
      console.log('login...', res);
      if (res.data && res.data.code === 200){
        setToken(res.data.account.id);
        yield put({
          type: 'updateState',
          payload: {status: 'ok',account:res.data.account}
        })

      }else{
        yield put({
          type: 'updateState',
          payload: {status: 'fail'}
        })
      }
    }
  },

  // 同步操作，纯函数的方式去更新数据
  reducers: {
    updateState(state, {payload}){
      return {...state, ...payload}
    }
  },
};