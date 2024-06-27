import React,{Component} from 'react';
class Uncontrolled extends React.Component{
constructor(props){
super(props);
this.a=this.a.bind(this);
this.input=React.createRef();
}

a(event){
    alert(`you have sunmitted`);
    event.preventDefault();
}
render(){
    return(
        <form onSubmit={this.a}>
            <br />
            
            Name:<input type='text' ref={this.input}/><br />
            College Name:<input type='text' ref={this.input}/><br />
            <input type="submit" value="submit" />
        </form>
    )
}
}
export default Uncontrolled;