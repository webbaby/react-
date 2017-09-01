/**
 * Created by liuwei on 2017/8/27.
 */
import React from 'react'
import { Link, Route, Switch ,HashRouter} from 'react-router-dom'
class List extends React.Component{
    render(){
        return(
            <div>
                <div>
                   <Link to="/detail/44">this is List1</Link>
                </div>
                <div>
                    <Link to="/detail/33">this is List2</Link>
                </div>
                <div>
                    <Link to="/detail/123">this is List3</Link>
                </div>
            </div>
        )
    }
}
export default List