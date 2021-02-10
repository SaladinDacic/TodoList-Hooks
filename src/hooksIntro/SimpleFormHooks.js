import React, { useState } from 'react';

function SimpleFormHooks() {
    const [ inputt, setInputt ] = useState('');
    const handleChange=(e)=>{
        setInputt(e.target.value)
    }
	return (
		<div>
			<hr/>
            <form>
                <h1>text is: {inputt}</h1>
                <input
                    type="text"
                    value={inputt}
                    onChange={handleChange}
                />
                <button onClick={(e)=>{
                    e.preventDefault()
                    setInputt("")
                    }}>
                        Rest input
                </button>
            </form>
		</div>
	);
}

export default SimpleFormHooks;
