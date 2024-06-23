//conditinal rendering
import PropTypes from 'prop-types'
function Login(props){
   
//    if(props.isLoggedIn){
//     return(<h1>Welcome {props.username}</h1>)
//    }
//    else{
//     return <h1>Please login to continue</h1>
//    }
const welcome=<h2 className="wel_msg">Welcome {props.username}</h2>;
const error=<h2 className="error_msg">Please login to continue</h2>;
return(props.isLoggedIn ? welcome:error);
}
Login.proptypes={
    isLoggedIn:PropTypes.bool,
    username:PropTypes.string,
}
Login.defaultProps={
    isLoggedIn:false,
    username:"NULL",
}
export default Login;
