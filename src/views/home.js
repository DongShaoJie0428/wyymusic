import React, { useEffect } from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
// 引入icon
import { Icon } from 'antd'
// 引入轮播
import { Carousel } from 'antd-mobile'

import { NavLink } from 'dva/router'

// 引入路由占位
import RouterView from '../routes/RouterView'

function HomePage(props) {
  return (
    <div className={styles.home}>
      {/* 写路由区的地方 */}
      <RouterView routes={props.routes}></RouterView>

      <footer className={styles.footer}>
        <NavLink to="/home/discover">发现</NavLink>
        <NavLink to="/home/video">视频</NavLink>
        <NavLink to="/home/friends">朋友</NavLink>
        <NavLink to="/home/my">我的</NavLink>
        <NavLink to="/home/account">账号</NavLink>
      </footer>
    </div>
  )
}

HomePage.propTypes = {

};

// 在connect里面注入一些数据
export default connect()(HomePage)