import React, { useEffect } from 'react';
import { connect } from 'dva';

import styles from './IndexPage.css';
import { NavLink } from 'dva/router'

// 引入图片
import Discover from '../assets/10.jpg'
import Video from '../assets/11.jpg'
import Friends from '../assets/12.jpg'
import My from '../assets/13.jpg'
import Account from '../assets/14.png'

// 引入路由占位
import RouterView from '../routes/RouterView'

function HomePage(props) {
  return (
    <div className={styles.home}>
      {/* 写路由区的地方 */}
      <RouterView routes={props.routes}></RouterView>

      <footer className={styles.footer}>
        <NavLink to="/home/discover">
          <dl>
            <dd><img src={Discover} alt=""/></dd>
            <dt>发现</dt>
          </dl>
        </NavLink>
        <NavLink to="/home/video">
          <dl>
              <dd><img src={Video} alt=""/></dd>
              <dt>视频</dt>
            </dl>
        </NavLink>
        <NavLink to="/home/friends">
          <dl>
            <dd><img src={Friends} alt=""/></dd>
            <dt>朋友</dt>
          </dl>
        </NavLink>
        <NavLink to="/home/my">
          <dl>
            <dd><img src={My} alt=""/></dd>
            <dt>我的</dt>
          </dl>
        </NavLink>
        <NavLink to="/home/account">
          <dl>
            <dd><img src={Account} alt=""/></dd>
            <dt>账号</dt>
          </dl>
        </NavLink>
      </footer>
    </div>
  )
}

HomePage.propTypes = {

};

// 在connect里面注入一些数据
export default connect()(HomePage)