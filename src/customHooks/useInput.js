import {useState} from "react";
export default initialValue=>{
    const [value, setValue] = useState(initialValue);
    const handleInput = (e)=>{
        setValue(e.target.value);
    }
    const handleRest = ()=>{
        setValue(initialValue)
    }
    return [value, handleInput, handleRest];
}