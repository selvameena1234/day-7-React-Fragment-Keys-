import React from "react";

import './App.css';


function NestedList(){

const categories = [
{
id:1,
name:"Fruits",
items:["Apple","Banana"]
},
{
id:2,
name:"Vegetables",
items:["Carrot","Potato"]
}
]

return(
<ul>
{categories.map((cat)=>(
<li key={cat.id}>

{cat.name}

<ul>
{cat.items.map((item,index)=>(
<li key={index}>{item}</li>
))}
</ul>

</li>
))}
</ul>
)

}

export default NestedList;
