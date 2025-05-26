import { useState } from 'react'
import './App.css'
import InputArea from './components/input'
import Tasks from './components/TodoTasks'

function App() {
 const[items,setItems] = useState([]);
 function addItems(inputs){
  setItems(prevValue=>([...prevValue,inputs]));
 }
  return (
    <>
    <div class="container">
       <div class="heading">
           <h1>To-Do List</h1>
        </div>
        <InputArea onAdd={addItems}/>   
        <div>
          <ul>
            {items.map((todoItem,index) =>(
              <Tasks
              key={index}
              id={index}
              task={todoItem} 
              />
            ))}
          </ul>
        </div>  
    </div>
    </>
  )
}

export default App
