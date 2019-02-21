import React from 'react'
import { Router } from 'dva/router';

// 引入路由组件 一级路由
import Register from "../views/register"
import Home from "../views/home"
import Login from "../views/login"
import Search from "../views/search"
import Play from "../views/play"

// 引入二级路由
import DiscoverPage from "../views/home/discover"
import MyPage from "../views/home/my"
import AccountPage from "../views/home/account"

// 引入配置路由组件
import RouterView from "./RouterView"


let config = {
  routes:[{
    path:"/register",
    component:Register
  },{
    path:"/login",
    component:Login
  }, {
    path:"/search",
    component:Search
  },{
    path:"/play/:id",
    component:Play
  }, {
    path:"/home",
    component: Home,
    children:[{
      path:"/home/discover",
      component:DiscoverPage
    }, {
      path:"/home/video",
      component:props => <p>{JSON.stringify(props)}</p>
    }, {
      path:"/home/friends",
      component:props => <p>{JSON.stringify(props)}</p>
    }, {
      path:"/home/my",
      component: MyPage
    }, {
      path:"/home/account",
      component:AccountPage
    }]
  },{
    path:"*",
    redirect:"/register"
  }]
}

// 导出路由配置
export default function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <RouterView routes={config.routes}></RouterView>
    </Router>
  );
}