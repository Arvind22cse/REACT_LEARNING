import React from 'react';
import Button from './Button'; // Corrected import to foodd import
import Student from './Student';
import Login from './Login';
import List from './List.jsx';
function App() {
    const non_veg=[{food:"Briyani",rate:100,id:1},
        {food:"Chicken 65",rate:120,id:2},
        {food:"Leg piece",rate:130,id:3},
        {food:"Chicken lolipop",rate:150,id:4},
        {food:"Mutton Briyani",rate:200,id:5},
       ];
       const veg=[{food:"Mushroom Briyani",rate:80,id:6},
        {food:"Veg friedrice",rate:70,id:7},
        {food:"Meals",rate:100,id:8},
        {food:"Paneer Gravy",rate:140,id:9},
        {food:"Veg Momos",rate:120,id:10},
       ];
    return (
        <>
        
             <Login isLoggedIn={true} userfood="Arvind"/>
            <Login />

            <Student food="Arvind" age="20" isStudent={true}/>
            <Student food="TamilSelvan" age={70} isStudent={false}/>
            <Student food="Bharath" age={20} isStudent={true}/>
            <Student food="Luffy" age={19} isStudent={false}/>
            <Student food="Donquiote Dharun" age={15} isStudent={true}/>
            <Student/>
            <Button /> 
            {non_veg.length>0 && <List items={non_veg} category="Non-vegetarian"/>}
            {veg.length>0 &&  <List items={veg} category="vegetarian"/>}
            </>
    );
}

export default App;
