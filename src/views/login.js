import React, { useState, useEffect } from 'react';
import { connect } from 'dva';

import style from './login.css';

// 引入icon
import phone from '../assets/shouji54.svg'
import passwd from '../assets/mima.svg'

// 引入提示框
import { Toast } from "antd-mobile"


function LoginPage(props) {
  // 设置默认值
  let [phoneNum, setPhone] = useState(17600194842)
  let [passWord, setPassWord] = useState("147852..")


  // 用useEffect监听登陆状态
  useEffect(()=>{
    if (props.status == 'fail'){
      Toast.info('登陆失败!');
    }else if(props.status == 'ok'){
      let redirect = '/tab/friends';
      if (props.location.search){
        redirect = decodeURIComponent(props.location.search.replace('?redirect=', ''))
      }
      props.history.replace(redirect);
    }
  }, [props.status])

  // 处理登陆
  function submit(){
    console.log("1111",1111)
    if(!/^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/.test(phoneNum)){
      Toast.info("手机号输入有误")
      return false
    }
    if(!passWord){
      Toast.info("请输入密码")
      return false
    }
    console.log(props,"...props")
    props.doLogin({phoneNum, passWord});
  }

  return (
    <div className="als">
      <section>
        <img className="ico" src={phone} alt="" />
        <input type="text" value={phoneNum} onChange={e => setPhone(e.target.value)} className="input" placeholder="手机号" />
      </section>
      <section>
        <img className="ico" src={passwd} alt="" />
        <input className="input" value={passWord} onChange={e => setPassWord(e.target.value)} type="password" placeholder="密码" />
      </section>
      <button className="btn" onClick={() => submit()}> 登陆 </button>
      <p className="bp">
        <span className="sps"> 忘记密码 </span>
      </p>
    </div>
  );
}

const mapStateToProps = state=>{
  return {
    status: state.login.status
  }
}

const mapDispatchToProps = dispatch=>{
  return {
    doLogin: payload=>{
      dispatch({
        type: 'login/login',
        payload
      })
    }
  }
}
export default connect(null, mapDispatchToProps)(LoginPage);