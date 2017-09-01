/**
 * Created by liuwei on 2017/8/27.
 */
import React from 'react'
import Item from './item/index.js'
class List extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        const data=this.props.data;
        return  (
            <div>
                {
                    data.map((item,index)=>{
                        return <Item key={index} data={item}/>
                    })
                }
            </div>
        )

    }
}
export default List