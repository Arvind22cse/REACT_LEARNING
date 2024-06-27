import React from 'react';
class Component extends React.Component{
    constructor(props){
        super(props);
        this.state={hello:"Arvind"};
        this.changeState=this.changeState.bind(this);
    }
     render(){
         return(
            <>
            <h1>Component's LifeCycle</h1>
            <h3>Hello{this.state.hello}</h3>
            <button onClick={this.changeState}>Click here!</button>
            </>
        );
}
componentWillMount(){
    console.log(`Component Wil Mount`);
}
componentDidMount(){
    console.log(`component Did Mount`);
}
changeState(){
    this.setState({hello:"Content Changed after clicked!!"});
}
componentWillUpdate(nextProps,nextState){
    console.log(`Component Will Update!`);
}
componentDidUpdate(prevProps,prevState){
console.log(`Component Did Update!`);
}
componentWillUnmount(){
    console.log(`Component Will Unmount!`);
}
}
export default Component;