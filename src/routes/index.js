import React from 'react'
import { Router } from 'dva/router';

// 引入路由组件 一级路由
import Login from "../views/login"
import Home from "../views/home"

// 引入二级路由
import DiscoverPage from "../views/home/discover"

// 引入配置路由组件
import RouterView from "./RouterView"


let config = {
  routes:[{
    path:"/login",
    component:Login
  },{
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
      component:props => <p>{JSON.stringify(props)}</p>
    }, {
      path:"/home/account",
      component:props => <p>{JSON.stringify(props)}</p>
    }]
  },{
    path:"*",
    redirect:"/home"
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