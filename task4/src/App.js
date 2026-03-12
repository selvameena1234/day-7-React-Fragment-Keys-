import React from 'react';
import './App.css';

function ItemList(){
  const items=["Apple","Banana","cherry"];
  return(
    <>
                <h3>Fruit List</h3>

    <ul>

    {items.map((items,index)=>(
      <React.Fragment key={index}>
        <li>{items}</li>
      </React.Fragment>
        ))}
        </ul>
    </>
);

}
  


export default ItemList;
