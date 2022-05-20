import React from 'react';
import {useState} from 'react';

const TodoInput = (props)=>{

    const {loading, setLoading}= props;
    const [item, setItem] = useState('');
    const handleSubmit = (e)=>{
        e.preventDefault();
        var status = false;

        const todo = {item,status}
        setLoading('pending');

        fetch('http://localhost:7000/todos', {
            method:'POST',
            headers:{"Content-type":"application/json"},
            body:JSON.stringify(todo)
        })
        .then((res)=>{
            return res.json()
        }).then((data)=>{
            console.log(data);
            setLoading('resolved');
            setItem('');
        }).catch(()=>{
            setLoading('rejected')
        })

    }

    return (
        <div className="form"> 

            <form onSubmit={handleSubmit}>
                <input 
                type="text"
                value={item}
                onChange={(e)=>setItem(e.target.value)}
                required
                 />

                <button className="btn-submit" type="submit" >Submit</button>
            </form>
           

        </div>
    )
}


export default TodoInput;