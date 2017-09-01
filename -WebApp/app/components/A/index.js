/**
 * Created by liuwei on 2017/8/28.
 */
import React from 'react'
class A extends React.Component{
    render(){
        return (
            <p>{this.props.userinfo.userid}</p>
        )
    }
}
export default A