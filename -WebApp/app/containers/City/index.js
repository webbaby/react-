/**
 * Created by liuwei on 2017/8/29.
 */
import React from 'react'
import { Link, Route, Switch ,HashRouter} from 'react-router-dom'
import Header from '../../components/Header/index.js'
import CurrentCity from '../../components/CurrentCity/index.jsx'
import CityList from '../../components/CityList/index.jsx'
import * as userInfoActionsFromOtherFile from '../../actions/userinfo'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import { CITYNAME } from '../../config/localStoreKey'
import localStore from '../../util/localStore'
class City extends React.Component{
    constructor(props, context) {
        super(props, context);

    }
    render(){
        return(
            <div>
                <Header title="选择城市"/>
                <CurrentCity cityName={this.props.userInfo.cityName}/>
                <CityList changeFn={this.changeCity.bind(this)}/>

            </div>
        )
    }
    changeCity(newCity) {
        if (newCity == null) {
            return
        }
        // 修改 redux
        const userInfo = this.props.userInfo;
        userInfo.cityName = newCity;
        this.props.userInfoActions.updateCityName(userInfo);

        // 修改 cookie
        localStore.setItem(CITYNAME, newCity);

        // 跳转页面
        
    }
}
function mapStateToProps(state) {
    return {
        userInfo: state.userInfo
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch)
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(City)