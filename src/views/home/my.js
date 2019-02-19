import { connect } from 'dva';
import styles from './css/my.css';

// 引入icon
import xinhao from "../../assets/xinhao.svg"
import yun from "../../assets/yun.svg"
import yinyue from "../../assets/yinyue.svg"
import yueliang from "../../assets/yueliang.svg"
import wode from "../../assets/wode.svg"
import bofang from "../../assets/bofang.svg"

import like from "../../assets/like.png"
import shoucang from "../../assets/shoucang.png"

function MyPage(props) {
  return (
    <div className={styles.my_page}>
      <header className={styles.my_header}>
        <img src={yun} alt=""/>
        <p>我的音乐</p>
        <img src={xinhao} alt=""/>
      </header>
      <section className={styles.my_section}>
        <dl>
          <dd><img src={yinyue} alt=""/></dd>
          <dt>本地音乐</dt>
          <b>1 > </b>
        </dl>
        <dl>
          <dd><img src={bofang} alt=""/></dd>
          <dt>最近播放</dt>
          <b>110 > </b>
        </dl>
        <dl>
          <dd><img src={wode} alt=""/></dd>
          <dt>我的收藏</dt>
          <b>专辑/歌手/视频/专栏 > </b>
        </dl>
        <dl>
          <dd><img src={yueliang} alt=""/></dd>
          <dt>Sati空间</dt>
          <b>特别的聆听模式 > </b>
        </dl>
      </section>
      <div className={styles.my_sonlist}>
        <i>我创建的歌单</i>
        <div className={styles.like}>
          <dl>
            <dd><img src={like} alt=""/></dd>
            <dt>
              <p>我喜欢的音乐</p>
              <p>6首，已下载2首</p>
            </dt>
          </dl>
        </div>
      </div>
      <div className={styles.my_sonlist}>
        <i>我收藏的歌单</i>
        <div className={styles.like}>
          <dl>
            <dd><img src={shoucang} alt=""/></dd>
            <dt>
              <p>90后的回忆杀</p>
              <p>537首，by抱抱自己好嘛</p>
            </dt>
          </dl>
        </div>
      </div>
    </div>
  )
}

// 在connect里面注入一些数据
export default connect()(MyPage)