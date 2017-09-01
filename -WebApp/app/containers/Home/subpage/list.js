/**
 * Created by liuwei on 2017/8/31.
 */
import React from 'react'
import './style.less'
import {getListData} from '../../../fetch/home/home.js'
import ListComponent from '../../../components/List/index.js'
import LoadMore from '../../../components/LoadMore/index.js'
class List extends React.Component{
    constructor(props, context) {
        super(props, context);
        this.state={
            data:[],  //存储列表信息
            hasMore:false,  //还有没有数据可供加载
            isLoadingMore:false, //记录当前状态下，是在加载中还是点击加载更多
            page:1
        }
    }
    render(){
        return(
            <div>
                <h2 className='home-list-title'>猜你喜欢</h2>
                {this.state.data.length?<ListComponent data={this.state.data}/>:<div>加载中...</div>}
                {this.state.hasMore?<LoadMore isLoadingMore={this.state.isLoadingMore} loadMoreFn={this.loadMoreData.bind(this)} />:<div></div>}
            </div>
        )
    }
    componentDidMount(){
        this.loadFirstPageData();
    }
    //获取首屏数据
    loadFirstPageData(){
        const cityName=this.props.cityName;
        const result=getListData(cityName,0);
        this.resultHandle(result);

    }
    //加载更多数据
    loadMoreData(){
        this.setState({
            isLoadingMore:true
        });
        const cityName=this.props.cityName;
        const page=this.state.page;
        const result=getListData(cityName,page);
        this.resultHandle(result);
        this.setState({
            page:page+1,
            isLoadingMore:false
        })
    }
    resultHandle(result){
        result.then(res=>{
            return res.json()
        }).then(json=>{
            const hasMore=json.hasMore;
            const data=json.data;
            this.setState({
                hasMore:hasMore,
                data:this.state.data.concat(data)
            })
        })
    }
}
export default List