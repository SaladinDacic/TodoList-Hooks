import React, {useState, useEffect} from 'react';
import Todo from './Todo';

function TodoList() {
    const [todoArray, setTodoArray] = useState([])
    const [formInput, setformInput] = useState("")
    const [numElement, setNumElement] = useState(false)
    useEffect(()=>{

    })
    const handleClick = (e)=>{
        e.preventDefault()
        let newArr = todoArray
        if(numElement !== false){
            if(formInput !== ""){
                setNumElement(numElement + 1)
                setTodoArray(newArr.concat(formInput))
            }
        }else{
            if(formInput !== ""){
                setNumElement(0)
                setTodoArray(newArr.concat(formInput))
            }
        }
        setformInput("")
    }
    const edit = (id)=>{
        
    }
   /*  useEffect(()=>{
        
        console.log(todoArray)
    }, [numElement]) */
    return (
        <div>
            <form>
                <h1>input je: {formInput}</h1>
                <input
                    type="text"
                    value={formInput}
                    onChange={(e)=>setformInput(e.target.value)}
                />
                <button onClick={handleClick}>Submit</button>
            </form>
            {todoArray.map((val,i)=>{
                return <Todo key={i} id={i} todo={todoArray[i]}/>
            })}
            
        </div>
    )
}

export default TodoList
