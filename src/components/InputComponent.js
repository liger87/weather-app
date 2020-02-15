import React, { useState } from 'react';

const InputComponent = (props) => {

    const [text, setText] = useState("");

    const handleInput = (e) => {
        setText(e.target.value);
    }

    return (
<div className='w-100'>
        <input value = {text} onChange = {handleInput}/>
    <br></br>
    <p>{text}</p>
    </div>
    )
    
    
}

export default InputComponent;