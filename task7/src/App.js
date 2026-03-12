import React from 'react';
import './App.css';

function FruitList(){
  const fruits=[
    {
      id:1,name:"apple"},
      {id:2,name:"banana"},
    
  ]

return(
  <ul>
  {fruits.map((fruit)=>(
    <li key={fruit.id}>{fruit.name}</li>
  ))}
  

</ul>
)
}

export default FruitList;
