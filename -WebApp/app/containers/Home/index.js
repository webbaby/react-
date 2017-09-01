/**
 * Created by liuwei on 2017/8/27.
 */
import React from 'react'
import { Link, Route, Switch ,HashRouter} from 'react-router-dom'
import HomeHeader from '../../components/HomeHeader/index.js'
import {connect} from 'react-redux'
import Category from '../../components/Category/index.jsx'
import Ad from './subpage/index.js'
import List from './subpage/list.js'
class Home extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render(){
        return (
            <div>
                <HomeHeader cityName={this.props.userInfo.cityName}/>
                <Category />
                <Ad />
                <List />
            </div>
        )
    }
}
function mapStateToProps(state){
    return {
             userInfo:state.userInfo
    }
}
function mapDispatchToProps(dispatch){
    return {

    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)
