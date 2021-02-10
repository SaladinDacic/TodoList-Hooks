import React, {useState, useEffect} from 'react';

function Clicker() {
    const [count, setCount] = useState(0);
    useEffect(()=>{
        document.title = `You clicked ${count} times`;
    })
    return (
        <div>
            <hr/>
            <h1>times clicked: {count}</h1>
            <button onClick={()=>setCount(count +1)}>Click me!</button>
        </div>
    )
}

export default Clicker
