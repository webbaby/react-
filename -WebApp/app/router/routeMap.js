/**
 * Created by liuwei on 2017/8/27.
 */
import React from 'react'
import { Link, Route, Switch ,HashRouter} from 'react-router-dom'

import App from '../containers/App.js'
import Home from '../containers/Home/index.js'
import Login from '../containers/Login/index.js'

import City from '../containers/City/index.js'
import NotFound from '../containers/NotFound/index.js'

class RouteMap extends React.Component {

    render() {
        return (
            <HashRouter>

                <App>

                    <Route exact path="/" component={Home}/>
                    <Route path="/city" component={City} />
                    <Route path="/login" component={Login} />

                </App>
            </HashRouter>
        )
    }
}

export default RouteMap