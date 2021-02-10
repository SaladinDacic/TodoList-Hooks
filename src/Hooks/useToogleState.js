import {useState} from 'react'

function useToogleState(initialValue) {
    const [state, setstate] = useState(initialValue)
    const toggleIt = ()=>{
        setstate(!state)
    }
    return [state, toggleIt]
}

export default useToogleState
