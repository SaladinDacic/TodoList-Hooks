import {useState} from 'react'

function useInputState(initialState) {
    const [state, setstate] = useState(initialState)
    const handleInput = (evt)=>{
        setstate(evt.target.value)
    }
    const restInput = ()=>{
        setstate("");
    }
    return [state, handleInput, restInput]
}

export default useInputState
