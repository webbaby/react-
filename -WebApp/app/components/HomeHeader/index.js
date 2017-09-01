/**
 * Created by liuwei on 2017/8/30.
 */
import React from 'react'
import './style.less'
import {Link} from 'react-router-dom'
class HomeHeader extends React.Component {
    constructor(props, context) {
        super(props, context);


    }

    render(){
        return (

            <div className="clear-fix" id="home-header">
                <div className="float-left home-header-left">
                    <Link to="/city">
                        <span>
                            {this.props.cityName}
                        </span>
                        &nbsp;
                        <i className="icon-angle-down"></i>
                    </Link>
                </div>
                <div className="float-right home-header-right">
                    <Link to="/login">
                      <i className="icon-user"></i>
                    </Link>
                </div>
                <div className="home-header-middle">
                    <div  className="search-container">
                        <i className="icon-search"></i>
                        <input type="text" placeholder="请输入关键信息"/>
                    </div>
                </div>

            </div>


        )
    }
}
export default HomeHeader