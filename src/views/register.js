import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';

import Weixin from '../assets/3.png'
import QQ from '../assets/4.png'
import Weibo from '../assets/5.png'
import Emaile from '../assets/6.png'

function IndexPage(props) {
  console.log(props)

  // 点击登录
  function LoginPhone(){
    props.history.push("/login")
  }

  return (
    <div className={styles.pic}>
      <div className={styles.btn}>
        <p onClick={LoginPhone}>手机号登陆</p>
        <p>注册</p>
      </div>
      <div className={styles.use}>
        <p>游客试用</p>
      </div>
      <div className={styles.footer}>
        <div className={styles.footes}>
          <dl>
            <dt><img className={styles.bgimage} src={Weixin} alt='' /></dt>
            <dd>微信</dd>
          </dl>
          <dl>
            <dt><img className={styles.bgimage} src={QQ} alt='' /></dt>
            <dd>QQ</dd>
          </dl>
          <dl>
            <dt><img className={styles.bgimage} src={Weibo} alt='' /></dt>
            <dd>微博</dd>
          </dl>
          <dl>
            <dt><img className={styles.bgimage} src={Emaile} alt='' /></dt>
            <dd>网易邮箱</dd>
          </dl>
        </div>
      </div>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);