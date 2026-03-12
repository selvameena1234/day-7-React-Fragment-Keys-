import logo from './logo.svg';
import './App.css';

import React from "react";

function DynamicNumberList() {

  const numbers = Array.from({ length: 10 }, () =>
    Math.floor(Math.random() * 100)
  );

  return (
    <div>
      <h2>Numbers Greater Than 50</h2>

      <ul>
        {numbers
          .filter((num) => num > 50)
          .map((num, index) => (
            <li key={index}>{num}</li>
          ))}
      </ul>

    </div>
  );
}

export default DynamicNumberList;
