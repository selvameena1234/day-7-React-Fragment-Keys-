import React from 'react';
import './App.css';

function App() {
  const tasks = [
    { id: 1, task: "Learn React", completed:true },
    { id: 2, task: "Practice JavaScript", completed: true },
    { id: 3, task: "Build Mini Project", completed: false },
    { id: 4, task: "Read Documentation", completed: false }
  ];
  return(
    <>
    completed tasks
    <ul>
      {tasks.map((task)=>
      task.completed?(
        <li key={task.id}>{task.task}</li>
      ):null
      )}
    </ul>
    
  
    </>
  );}


export default App;
