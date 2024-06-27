import './App.css';
import Styles from './mystyle.module.css'
function App(props){
  
    const mystyle={
        color:"white",
        backgroundColor:"Black",
        border:"none",
        borderRadius:"10px",
        padding:"10px 10px 10px",
        cursor:"pointer",
    }

  return(
    <>
      <h1 style={{color:"green"}}>Hello {props.name}</h1>
      <p className="Arvind">I'm Arvind M</p>
      <h2 className={Styles.mystyle}>Full Stack Developer</h2>
      <button style={mystyle}>Submit</button>
      </>
  );
}
export default App;