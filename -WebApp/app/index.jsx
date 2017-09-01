import React from 'react'
import ReactDOM from 'react-dom'

import RouteMap from './router/routeMap.js'
import {Provider} from 'react-redux'
import configureStore from './store/configureStore.js'
//import fn from './index-demo.js'
//fn();

import {getData,postData} from './fetch/test.js'
import './static/css/common.less'
import './static/css/font.css'
const store=configureStore();
ReactDOM.render(
    <Provider store={store}>
        <div>
            <RouteMap />

            
        </div>
    </Provider>,
    document.getElementById("root")
    
);