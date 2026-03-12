import React from 'react';
import './App.css';
function User(){
  const User=[
    {id:101,name:"selva"},
    {id:102,name:"prakash"}
  ]
  return(
    <ul>
      {User.map((user)=>(
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  )

}
export default User;
