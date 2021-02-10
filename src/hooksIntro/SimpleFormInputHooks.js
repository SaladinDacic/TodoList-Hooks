import React from 'react';
import useInput from "../hooks/useInput";

function SimpleFormInputHooks() {
    const [email, setEmail, restEmail] = useInput("");
    const [password, setPassword, restPassword] = useInput("");
    return (
        <div>
            <hr/>
            <h1>Email is: {email} & Password is: {password}</h1>
            <input type="email" value={email} onChange={setEmail}/>
            <input type="text" value={password} onChange={setPassword}/>
            <button onClick={restEmail}>Rest email</button>
            <button onClick={restPassword}>Rest password</button>
            <button onClick={()=>{restPassword(); restEmail()}}>Rest booth</button>
        </div>
    )
}

export default SimpleFormInputHooks
