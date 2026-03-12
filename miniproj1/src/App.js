import React from 'react';
import './App.css';

function App() {
  const fruits =["Apple","Banana","cherry"]
  return(
    <>
          <h2>Fruit List</h2>

    {fruits.map((fruits,index)=>(
<React.Fragment key={index}>
  {fruits}
</React.Fragment>
    ))}
  </>
  );
}

export default App;
