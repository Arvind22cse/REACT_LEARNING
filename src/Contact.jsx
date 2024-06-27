import styled from 'styled-components';
function Contact(){
    const H1=styled.h1`
    font-family:Arial;
    font-siaze:35px;
    text-align:center;
    color:red;`;
    const Div=styled.div`
    margin:20px;
    border:5px dashed green;`;
    return(
        <Div>
        <H1>Contact component</H1>
        </Div>
    )
}
export default Contact;