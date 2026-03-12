import React from 'react';
import './App.css';



function FruitList(){
const fruits =["apple","banana","cherry"]
return(
  <ul>
    {fruits.map((fruit)=>(
      <li> {fruits}</li>
    ))}
  </ul>
)
}
export default FruitList;
