
import './App.css';

import React from "react";

function EvenNumbers(){

const numbers = [1,2,3,4,5,6,7,8]

return(
<ul>
{numbers.map((num)=>(
num % 2 === 0 ?
<li key={num}>{num}</li> : null
))}
</ul>
)

}

export default EvenNumbers;
