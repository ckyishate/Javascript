import React from 'react';

const Todos = ({todos, setTodos})=>{
    

    const handleClick= (e)=>{
        e.target.classList.add("crossed");
    }

    const handleDelete = (id)=>{
        
        // console.log(e.target.parentNode.id);
        fetch(`http://localhost:7000/todos/${id}`, {
            method:'DELETE'
        }).then((res)=>{
            return res.json();
        }).then(()=>{
            console.log(id);
            const newTodos = todos.filter((todo)=>todo.id !== id)
            console.log(newTodos);
            setTodos(newTodos);
        })


    }

    return (
        <div className="items" id="items">

            {todos.map((todo)=>(
                <div className="item" id={todo.id} key={todo.id}>
                    <h2 onClick={handleClick} >{todo.item}</h2>
                    <p className="btn-trash" onClick={()=>handleDelete(todo.id)}>delete</p>
                </div>
            ))}
            
            
        </div>
    )
}

export default Todos;