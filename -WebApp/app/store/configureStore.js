/**
 * Created by liuwei on 2017/8/28.
 */
import {createStore} from 'redux'
import rootReducer from '../reducers'
export default function configureStore(initialState){
    const store=createStore(rootReducer,initialState,window.devToolsExtension?window.devToolsExtension():undefined);
    return store;
}