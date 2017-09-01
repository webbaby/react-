/**
 * Created by liuwei on 2017/8/27.
 */
import React from 'react'
class Input extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            value: ''
        }

    }
    render(){
        return(
            <div>
                <input 
                    style={{width:'50%',height:'40px',fontSize:'18px'}}
                    value={this.state.value}
                    onChange={this.changeHander.bind(this)}
                    onKeyUp={this.keyUpHander.bind(this)}
                />
            </div>
        )
    }
    changeHander(e){
        this.setState({value:e.target.value})
    }
    keyUpHander(e){
        const value=this.state.value;
        if(e.keyCode===13&&value.trim()){
            this.props.submitFn(value);
            this.setState({
                value:''
            })
        }
    }
}
export default Input