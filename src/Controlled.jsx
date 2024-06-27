import React,{Component} from 'react';
class Controlled extends React.Component{
constructor(props){
    super(props);
    this.state={value:''};
    this.a=this.a.bind(this);
    this.b=this.b.bind(this);
}    
a(event){
    this.setState({value:event.target.value})
}
b(event){
    alert('You have sumbitted and u name is:'+this.state.value);
    event.preventDefault();
}
    render(){
        return(
<>
<br />
<form onSubmit={this.b}>
<h1>Controlled</h1><br />
Name:<input type="text" onChange={this.a}/>
<h2>{this.state.value}</h2>
<button type='submit'>Submit</button>
</form>
</>
        )
    
    }
}
export default Controlled;