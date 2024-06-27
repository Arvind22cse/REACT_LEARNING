import React,{Component} from "react";
import ReactDOM from 'react-dom'
class Finddom extends React.Component{
    constructor(){
        super();
        this.a=this.a.bind(this);
        this.b=this.b.bind(this);
    }
    a(){
        var dom1=document.getElementById("dom1");
        ReactDOM.findDOMNode(dom1).style.color='red';
    }
    b(){
        var dom2=document.getElementById("dom2");
        ReactDOM.findDOMNode(dom2).style.color='green';
    }
    render(){
        return(
            <>
            <br /><h1>FindDom</h1><br />
            <button onClick={this.a}>Dom1</button>
            <button onClick={this.b}>Dom2</button>
            <h1 id="dom1">Hai</h1>
            <h2 id="dom2">Bye</h2>
            </>
        )
    }
}
export default Finddom;