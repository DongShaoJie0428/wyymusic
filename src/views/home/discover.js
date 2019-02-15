import React, { useEffect } from 'react';
import { connect } from 'dva';
import styles from '../IndexPage.css';
// 引入icon
import { Icon } from 'antd'
// 引入轮播
import { Carousel } from 'antd-mobile'

function DiscoverPage(props) {
  // 用hooks或者无状态组件来接受props里面的参数
  console.log(props,"...proprs")
  // 相当于生命周期
  // 每次render都会触发 避免多次触发加一个[]
  // 在hooks中使用useEffect处理异步操作
  useEffect(()=>{
    props.getBanner()
  },[])
  
  return (
    <div className={styles.home}>
      <div className={styles.header}>
        <div className={styles.top}>
          <Icon type="bulb" style={{fontSize:"24px",color:"#fff"}} />
          <div className={styles.search}>
            <input type="text" placeholder="猜你喜欢 浮生"/>
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
    })
  }
}


// 在connect里面注入一些数据
export default connect(mapStateToProps, mapDispatchToProps)(DiscoverPage)