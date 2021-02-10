import React, {useState} from 'react'

export default function CounterHooks() {
    const [counter, setCounter] = useState(0)
    return (
        <div>
            <h1>Counter is: {counter}</h1>
            <button onClick={()=>setCounter(counter+1)}>Click me!</button>
        </div>
    )
}
