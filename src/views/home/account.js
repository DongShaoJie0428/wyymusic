import { connect } from 'dva';
import styles from './css/account.css';

// 引入icon
import xiaoxi from "../../assets/icon/xinxi.svg"
import huiyuan from "../../assets/icon/huiyuan-.svg"
import shangcheng from "../../assets/icon/shangcheng.svg"
import youxi from "../../assets/icon/youxi.svg"
import zaixian from "../../assets/icon/zaixian.svg"
import shezhi from "../../assets/icon/shezhi.svg"
import sao from "../../assets/icon/saoyisao.svg"
import pifu from "../../assets/icon/pifu.svg"
import dengpao from "../../assets/icon/dengpao.svg"
import dingshi from "../../assets/icon/shizhong.svg"
import naozhong from "../../assets/icon/naozhong.svg"
import jiashi from "../../assets/icon/xiaoqiche.svg"
import qinzi from "../../assets/icon/qinzi.svg"
import xiaobin from "../../assets/icon/binggun-.svg"
import youhui from "../../assets/icon/youhuiquan.svg"
import yinyue from "../../assets/icon/music.svg"
import share from "../../assets/icon/fenxiang.svg"
import guanyu from "../../assets/icon/guanyu.svg"
import money from "../../assets/icon/qian.svg"
import pen from "../../assets/icon/pan_icon.svg"


function AccountPage(props) {
  return (
    <div className="number_wrap">
      <header className="number_header">
        <p>账号</p>
      </header>
      <section className="number_section">
        <div className="per">
          <dl>
            <dt>
              <img
                src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2097124721,3074829049&fm=27&gp=0.jpg"
                alt=""
              />
            </dt>
            <dd>
              <div>
                <p className="name">张小宇</p>
                <i className="lv">LV6</i>
              </div>
              <strong className="qd">
                <img className="money" src={money} alt="" />
                签到
              </strong>
            </dd>
          </dl>
          <ul className="lists">
            <li>
              <span className="tbe">动态</span>
              <span>1</span>
            </li>
            <li>
              <span className="tbe">关注</span>
              <span>3</span>
            </li>
            <li>
              <span className="tbe">粉丝</span>
              <span>1</span>
            </li>
            <li>
              <img className="pens" src={pen} alt="" />
              <span className="tbe">我的资料</span>
            </li>
          </ul>
        </div>

        <div className="news">
          <img src={xiaoxi} alt=""/>
          <p>我的消息</p>
        </div>
        <ul className="center">
          <li>
            <img src={huiyuan} alt=""/>
            <p>会员中心</p>
          </li>
          <li>
            <img src={shangcheng} alt=""/>
            <p>商城</p>
          </li>
          <li>
            <img src={youxi} alt=""/>
            <p>精品游戏推荐</p>
          </li>
          <li>
            <img src={zaixian} alt=""/>
            <p>在线听歌免流量</p>
          </li>
        </ul>

        <ul className="all center">
          <li>
            <img src={shezhi} alt=""/>
            <p>设置</p>
          </li>
          <li>
            <img src={sao} alt=""/>
            <p>扫一扫</p>
          </li>
          <li>
            <img src={pifu} alt=""/>
            <p>个性换肤</p>
          </li>
          <li>
            <img src={dengpao} alt=""/>
            <p>夜间模式</p>
          </li>
          <li>
            <img src={dingshi} alt=""/>
            <p>定时关闭</p>
          </li>
          <li>
            <img src={naozhong} alt=""/>
            <p>音乐闹钟</p>
          </li>
          <li>
            <img src={jiashi} alt=""/>
            <p>驾驶模式</p>
          </li>
          <li>
            <img src={qinzi} alt=""/>
            <p>亲子频道</p>
          </li>
          <li>
            <img src={xiaobin} alt=""/>
            <p>小冰电台</p>
          </li>
          <li>
            <img src={youhui} alt=""/>
            <p>优惠券</p>
          </li>
        </ul>
        <div className="block"></div>
        <ul className="share center">
          <li>
            <img src={yinyue} alt=""/>
            <p>加入网易云音乐人</p>
          </li>
          <li>
            <img src={share} alt=""/>
            <p>分享网易云音乐</p>
          </li>
          <li>
            <img src={guanyu} alt=""/>
            <p>关于</p>
          </li>
        </ul>
      </section>
  </div>
  )
}

// 在connect里面注入一些数据
export default connect()(AccountPage)