import React from 'react';
import './App.css';

function UserList(){
  const users=["sel","meena","prakash","dhiya"]
  return(
    <ul>
      {users.map((user,index)=>(
<li key={index}>{user} </li>
      

     ) )}
    </ul>
  )
}

export default UserList;
