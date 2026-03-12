
import './App.css';

import React from "react";

function UserTable(){

const users = [
{id:1, name:"Ram", age:21},
{id:2, name:"Sam", age:22},
{id:3, name:"John", age:23}
]

return(
<table border="1">
<thead>
<tr>
<th>Name</th>
<th>Age</th>
</tr>
</thead>

<tbody>
{users.map((user)=>(
<React.Fragment key={user.id}>
<tr>
<td>{user.name}</td>
<td>{user.age}</td>
</tr>
</React.Fragment>
))}
</tbody>

</table>
)

}

export default UserTable;


