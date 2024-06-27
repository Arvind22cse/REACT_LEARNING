import React from "react";
class Events extends React.Component{
    constructor(props){
        super(props);
        this.state={
            college:''
        };
    }
    changeText(event){
        this.setState({
            college:event.target.value
        });
    }
    render(){
        return(
            <>
            enter your name:
            <input type="text" id="clg" onChange={this.changeText.bind(this)} />
            <h4>You entered: {this.state.college}</h4>
            </>
        )
    }
}
export default Events;