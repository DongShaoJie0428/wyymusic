import React, { useEffect } from "react";
import { connect } from "dva";

import style from "./home/css/play.css";

function PlayPage(props) {
  console.log(props,"...paly props")
  useEffect(()=>{
    props.getSongDetaile({ids: props.match.params.id})
  },[])

  useEffect(()=>{
    if(props.songDetaile){
      document.title = props.songDetaile.name + props.songDetaile.alia[0]
    }
  },[props.songDetaile])
  

  return (
   <div className={style.play_wrap}>
    {
      props.play.songDetaile.map((item,index)=>{
        return 
      })
    }
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
