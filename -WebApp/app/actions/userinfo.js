/**
 * Created by liuwei on 2017/8/28.
 */
import * as actionTypes from '../constants/userinfo.js'
export function login(data){
    return{
        type:actionTypes.USERINFO_LOGIN,
        data
    }
}
export function updateCityName(data){
    return {
        type:actionTypes.UPDATE_CITYNAME,
        data
    }
}