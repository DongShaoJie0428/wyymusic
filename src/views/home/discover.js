import React, { useEffect } from 'react';
import { connect } from 'dva';
import styles from './css/discover.css';
// 引入icon
import { Icon } from 'antd'
// 引入轮播
import { Carousel } from 'antd-mobile'

// 引入图片
import Person from '../../assets/3.jpg'
import Everyone from '../../assets/4.jpg'
import Songslist from '../../assets/5.jpg'
import Rank from '../../assets/6.jpg'

function DiscoverPage(props) {
  // 用hooks或者无状态组件来接受props里面的参数
  console.log(props,"...proprs")
  // 相当于生命周期
  // 每次render都会触发 避免多次触发加一个[]
  // 在hooks中使用useEffect处理异步操作
  useEffect(()=>{
    props.getBanner()
    props.getSongList()
  },[])

  // 跳转搜索页面
  function goSearch(){
    props.history.push({
      pathname:"/search"
    })
  }
  
  return (
    <div className={styles.home}>
      <div className={styles.header}>
        <div className={styles.top}>
          <Icon type="bulb" style={{fontSize:"24px",color:"#fff"}} />
          <div className={styles.search}>
            <input type="text" placeholder="猜你喜欢 浮生" onClick={()=>goSearch()}/>
          </div>  
          <Icon type="bar-chart" style={{fontSize:"24px",color:"#fff"}} />
        </div>
        <div className={styles.nav}>
          <ul>
            <li>个性推荐</li>
            <li>主播电台</li>
          </ul>
        </div>
      </div>
      <div className={styles.banner}>
        <Carousel autoplay={true} infinite>
          {
            props.discover.banner.map((item,index)=>{
              return <a key={index} href={item.url?item.url: 'javascript:void(0)'}>
                        <img src={item.imageUrl} alt=""/>
                    </a>
            })
          }
        </Carousel>
      </div>
      <div className={styles.nav_list}>
        <dl>
          <dd><img src={Person} alt=""/></dd>
          <dt>私人FM</dt>
        </dl>
        <dl>
          <dd><img src={Everyone} alt=""/></dd>
          <dt>每日推荐</dt>
        </dl>
        <dl>
          <dd><img src={Songslist} alt=""/></dd>
          <dt>歌单</dt>
        </dl>
        <dl>
          <dd><img src={Rank} alt=""/></dd>
          <dt>排行榜</dt>
        </dl>
      </div>
      <div className={styles.recomm}>
        <p>推荐歌单 > </p>
      </div>
      <div className={styles.songs}>
          {
            props.discover.songsList.map((item,ind)=>{
              return <dl key={ind}>
                        <dd><img src={item.picUrl} alt=""/></dd>
                        <dt>{item.name}</dt>
                      </dl>
            })
          }
      </div>
      <dir className={styles.block}></dir>
    </div>
  )
}


const mapStateToProps = state => {
  console.log(state,"....state")
  return state
}

const mapDispatchToProps = dispatch => {
  return {
    getBanner: () => dispatch({
      type:"discover/getBanner"
    }),
    getSongList: () => dispatch({
      type:"discover/getSongList"
    })
  }
}


// 在connect里面注入一些数据
export default connect(mapStateToProps, mapDispatchToProps)(DiscoverPage)