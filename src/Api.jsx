import React,{Component} from 'react';
class Api extends React.Component{
    constructor(){
        super()
        this.forceUpdateState=this.forceUpdateState.bind(this);
    }
    forceUpdateState(){
        this.forceUpdate();
    }
    render(){
        return(
            <div>
         <h1>Hello Everyone</h1>
         <h3>Random No:{Math.random()}</h3>
<button onClick={this.forceUpdateState}>ForceUpdate</button>         
            </div>
        )
    }
}
export default Api;