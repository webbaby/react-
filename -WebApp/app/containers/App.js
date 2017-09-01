/**
 * Created by liuwei on 2017/8/27.
 */
import React from 'react'
import {
    HashRouter,
    Route,
    Link,
    Switch
} from 'react-router-dom'
import LocalStore from '../util/localStore.js'
import {CITYNAME} from '../config/localStoreKey.js'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as userInfoActionsFromOtherFile from '../actions/userinfo.js'
class App extends React.Component{
    constructor(props, context) {
        super(props, context);
        this.state = {
            initDone:false
        }

    }
    render(){
        return(
            <div>

                
                <div>{this.state.initDone?this.props.children:<div>加载中...</div>}</div>

            </div>
        )
    }
    componentDidMount(){
        //从localstorerage里面获取城市信息
        let cityName=LocalStore.getItem(CITYNAME);
        if(cityName==null){
            cityName='北京';
        }
        //console.log(cityName);
        this.props.userInfoActions.updateCityName({
            cityName:cityName
        });
        this.setState({
            initDone:true
        })
    }
}
function mapStateToProps(state){
    return {

    }
}
function mapDispatchToProps(dispatch){
    return {
        userInfoActions:bindActionCreators(userInfoActionsFromOtherFile,dispatch)
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)