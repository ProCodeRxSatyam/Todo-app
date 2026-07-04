import { useState } from "react";

function InputArea(props){
    const[inputs,setInputs] = useState("");
    function handleChange(event){
        setInputs(event.target.value);
    }
    return(
        <form className="form">
            <input type="text" onChange={handleChange} value={inputs} placeholder="Add ✍️ your tasks" spellCheck="false"/>
            <button
            onClick={()=>{props.onAdd(inputs);setInputs("");}} 
            >
                <span>Add</span>
            </button>
        </form>
    )
}

export default InputArea;