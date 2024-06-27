import React from "react";
import propTypes from 'prop-types'
class Propvalidation extends React.Component{
    render(){
return(
<>
<h1>{this.props.propArray}</h1>
</>
);
}
}
Propvalidation.propTypes={
    propArray:propTypes.array.isRequired,
}
Propvalidation.defaultProps={
    propArray:"Arvind"
}
export default Propvalidation;