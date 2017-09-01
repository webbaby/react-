/**
 * Created by liuwei on 2017/9/1.
 */

import React from 'react'
import LoginComponent from '../../components/Login/index.js'
class Login extends React.Component{
    constructor(props, context) {
        super(props, context);
        this.state={
            checking:true
        }
    }
    render(){
        return(
            <div>{this.state.checking?<div>正在登录</div>:<div><LoginComponent /></div>}</div>
        )
    }
    componentDidMount(){
        this.doCheck();
    }

    doCheck() {
        const userInfo = this.props.userInfo;

            this.setState({
                checking:false
            })

    }
        goUserPage(){

        }

}
export default Login