/**
 * Created by liuwei on 2017/8/28.
 */
import {combineReducers} from 'redux'
import userInfo from './userinfo.js'
const rootReducer=combineReducers({
    userInfo:userInfo
});
export default rootReducer