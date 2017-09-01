/**
 * Created by liuwei on 2017/9/1.
 */
import React from 'react'
import './style.less'
class LoadMore extends React.Component{
    constructor(props, context) {
        super(props, context);

    }
    render(){
        return(
            <div className='load-more' ref="wrapper">
                {this.props.isLoadingMore?
                    <span>加载中</span>
                    :<span onClick={this.loadMoreHandle.bind(this)}>加载更多</span>}
            </div>
        )
    }
    loadMoreHandle(){
        this.props.loadMoreFn()
    }
    componentDidMount(){
        let timeoutId;
        const LoadMoreFn=this.props.loadMoreFn;
        const wrapper=this.refs.wrapper;
        function callback(){
            const top=wrapper.getBoundingClientRect().top;
            const windowHeight=window.screen.height;
            if(top&&top<windowHeight){
                LoadMoreFn();
            }
        }
        window.addEventListener('scroll',function () {
            if(this.props.isLoadingMore){

            }
            if(timeoutId){
                clearTimeout(timeoutId)
            }
            timeoutId=setTimeout(callback,50);

        }.bind(this))
    }
}
export default LoadMore