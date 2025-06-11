import React,{ useState} from 'react';


function Tasks(props) {

  return (
    <div className='listContainer'>
      
        <li
          className='list'
          style={{ textDecoration: props.isChecked ? 'line-through' : 'none' }}
        >
         <input className='checkBox' type="checkbox" onChange={props.onToggle} checked={props.isChecked}/>
            👉     {props.task}
        </li>
      
    </div>
  );
}

export default Tasks;
