/**
 * Created by liuwei on 2017/9/1.
 */

import React from 'react'
import './style.less'
class Login extends React.Component{
    constructor(props, context) {
        super(props, context);

    }
    render(){
        return(
            <div id="login-container">
                <div className="input-container phone-container">
                    <i className="icon-tablet"></i>
                    <input
                        type="text"
                        placeholder="输入手机号"


                    />
                </div>
                <div className="input-container password-container">
                    <i className="icon-key"></i>
                    <button>发送验证码</button>
                    <input type="text" placeholder="输入验证码"/>
                </div>
                <button className="btn-login" >登录</button>
            </div>
        )
    }
}
export default Login