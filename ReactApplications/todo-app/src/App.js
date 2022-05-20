import React from 'react';
import TodoInput from './todoInput'
import Todos from './todos';
import {useState, useEffect} from 'react';


function App() {
  const [todos, setTodos] = useState(null);
  const [loading, setLoading]= useState('idle');

const isidle = loading === 'idle'
const ispending = loading === 'pending';
const isResolved = loading === 'resolved';
  useEffect(()=>{
      fetch('http://localhost:7000/todos')
      .then(res=>{
          return res.json();
      })
      .then(data => {
          data= data.reverse();
          console.log(data);
          setTodos(data);
      })
  }, [isResolved])


const props = {loading, setLoading}
  return (
    <div className="container">
      <div className="content">
        <h2>My todo</h2>
        <TodoInput {...props}/>
         {/* <Todos todos={todos}/> */}
        {todos && <Todos setTodos={setTodos} todos={todos} />}
     
      </div>
    </div>
     
  );
}

export default App;
