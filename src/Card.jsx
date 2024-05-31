import profilepic from './assets/prof.jpg'


function Card(){
return(
    <div className="card">
        <img className="card-image" src={profilepic} alt="ERROR" ></img>
        <h2 className="card-title">BAG</h2>
        <p className="card-txt">B-Bharath<br/> A-Arvind <br/>G-Gaurav</p>
    </div>
);
}
export default Card;