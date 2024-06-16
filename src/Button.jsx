function Button(){ 
    const styles={
      
            backgroundColor: "hsl(200, 100%, 50%)",
            color:"white",
            padding: "10px 20px",
            borderRadius: "5px",
            border: "none",
            cursor: "pointer",
          
    }
    return (<button style={styles}>Submit</button>); // Added space for readability
}

export default Button
