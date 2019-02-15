import React, { useState, useEffect } from 'react';
import { connect } from 'dva';

import style from './login.css';

// 引入icon
import phone from '../assets/shouji54.svg'
import passwd from '../assets/mima.svg'

// 引入提示框
import { Toast } from "antd-mobile"


function LoginPage() {
  // 设置默认值
  let [phoneNum, setphone] = useState("13717920530")
  let [passWd, setpasswd] = useState("123789456...")

  function submit(){
    if(!/^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/.test(phoneNum)){
      Toast.info("手机号输入有误")
      return false
    }
    if(!passWd){
      Toast.info("请输入密码")
      return false
    }
  }

  return (
    <div className="als">
      <section>
        <img className="ico" src={phone} alt="" />
        <input type="text" value={phoneNum} onChange={e => setphone(e.target.value)} className="input" placeholder="手机号" />
      </section>
      <section>
        <img className="ico" src={passwd} alt="" />
        <input className="input" value={passWd} onChange={e => setpasswd(e.target.value)} type="password" placeholder="密码" />
      </section>
      <button className="btn" onClick={() => submit()}> 登陆 </button>
      <p className="bp">
        <span className="sps"> 忘记密码 </span>
      </p>
    </div>
  );
}

export default connect()(LoginPage);