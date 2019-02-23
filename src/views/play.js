import React, { useEffect,useState } from "react";
import { connect } from "dva";

import style from "./home/css/play.css";

import { Slider } from "antd-mobile"

import { formatTime } from "../utils/index"

// 引入icon
import shun from "../assets/icon/shunxubofang.svg"
import dan from "../assets/icon/danquxunhuan.svg"
import sui from "../assets/icon/suijibofang.svg"
import shang from "../assets/icon/shang.svg"
import xia from "../assets/icon/xia.svg"
import kaishi from "../assets/icon/kaishi.svg"
import zanting from "../assets/icon/zanting.svg"
import liebiao from "../assets/icon/bofangliebiao.svg"
import { start } from "pretty-error";

function PlayPage(props) {
  console.log(props,"...paly props")

  // 是否播放
  let [isPlay, setIsPlay] = useState(true)
  // 播放进度
  let [progress, setProgress] = useState(0)
  // 播放时长
  let [duration, setDuration] = useState(0)

  // audio实例
  let audioEle = React.createRef()
  
  // 获取歌曲详情
  useEffect(()=>{
    props.getSongDetaile({ids: props.match.params.id})
  },[])

  // 标题
  useEffect(()=>{
    if(props.songDetaile){
      document.title = props.songDetaile.name + props.songDetaile.alia[0]
    }
  },[props.songDetaile])

  // 控制播放暂停
  useEffect(()=>{
    if(audioEle.current){
      isPlay?audioEle.current.pause() : audioEle.current.play()
    }
  },[isPlay])

  // 判断是否播放完成
  useEffect(()=>{
    // 如果播放进度 === 播放时长
    if (progress && (progress === duration)) {
      setIsPlay(true)
    }
  },[progress])
  
  
  // 改变播放暂停按钮
  function getStart(){
    setIsPlay(!isPlay)
    // console.log(audioEle.current,audioEle.current.duration,audioEle.current.currentTime)
  }

  // 跟新播放进度
  function timeUpdata(){
    setProgress(audioEle.current.currentTime)
  }

  // 音频开始播放
  function loadAudio(){
    setDuration(audioEle.current.duration)
  }

  // 拖到进度条
  function progressChange(e){
    setIsPlay(true)
    // console.log(e,"...e")
    // 改变进度条的进度
    setProgress(e)
  }

  // 防止卡顿
  function afterChange(e){
     audioEle.current.currentTime = e;
     setIsPlay(false)
  }

  // 如果没有数据，啥也不渲染
  if(!Object.keys(props.play.songDetaile).length){
    return null;
  }

  return (
   <div>
     {/* 背景 */}
    <section className={style.playWrap} style={{backgroundImage:`url(${props.play.songDetaile.al.picUrl})`}}></section>
    {/* 封面   其中的样式做一个继承 */}
    <section className={isPlay?style.disable:style.album}>
      <span style={{backgroundImage:`url(${props.play.songDetaile.al.picUrl})`}}></span>
    </section>
    {/* 播放进度 */}
    {duration?<section className={style.progress}>
      <span>{formatTime(progress)}</span>
      <Slider
          style={{ marginLeft: 10, marginRight: 10 ,flex: 1,width:250}}
          defaultValue={0}
          value={progress}
          min={0}
          max={Math.round(duration)}
          onChange={progressChange}
          onAfterChange={afterChange}
        />
      <span>{formatTime(duration)}</span>
    </section>:null}
    {/* 开始暂停 */}
    <section className={style.end}>
      <img src={shun} alt=""/>
      <img src={shang} alt=""/>
      <img onClick={getStart} src={isPlay?kaishi:zanting} alt=""/>
      <img src={xia} alt=""/>
      <img src={liebiao} alt=""/>
    </section>
    {/* audio组件 */}
    <section>
      <audio src={props.play.songDetaile.url}  ref={audioEle} controls onTimeUpdate={timeUpdata} onCanPlay={loadAudio}></audio>
    </section>
   </div>
  );
}


const mapStateToProps = state => {
  return state
}

const mapDispatchToProps = dispatch => {
  return {
    getSongDetaile:payload=>{
      dispatch({
        type:"play/getSongDetaile",
        payload
      })
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(PlayPage);
