import { useEffect, useState } from "react";
import "./App.css";
import InputArea from "./components/input";
import Tasks from "./components/TodoTasks";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

function App() {
  // Initialize state directly from localStorage
  const [items, setItems] = useState(() => {
    const savedItems = localStorage.getItem("items");
    return savedItems ? JSON.parse(savedItems) : [];
  });

  const [editedId, setEditedId] = useState(null);
  const [editedText, setEditedText] = useState("");



  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  function addItems(inputs) {
    setItems((prevValue) => [...prevValue, { id: Date.now(), inputs , isChecked : false }]);
  }
  function handleDelete(id) {
    setItems((prevValue) => prevValue.filter((item) => item.id !== id));
  }
  // const EditedTask =  function handleEdit(task,id){
  //   handleDelete(id);
  //   return (task);
  // }
  function startEdit(inputs, id) {
    setEditedId(id);
    setEditedText(inputs);
  }
  function saveEdit(id) {
    setItems((prevValue) =>
      prevValue.map((todo) =>
        todo.id === id ? { ...todo, inputs: editedText } : todo
      )
    );
    setEditedId(null);
    setEditedText("");
  }
  function toggleChecked(id){
    setItems((prevValue)=>
      prevValue.map((todo)=>todo.id===id? {...todo,isChecked: !todo.isChecked} : todo)
    );
  }

  return (
    <>
      <div className="container">
        <div className="heading">
          <h1>To-Do List</h1>
        </div>
        <InputArea onAdd={addItems} />
        <>
          <ul>
            {items.map((item) => (
              <li className="taskDisplay" key={item.id}>
                {editedId === item.id ? (
                  <div className="form">
                    <input
                      type="text"
                      value={editedText}
                      onChange={(e) => setEditedText(e.target.value)}
                    />
                    <button onClick={() => saveEdit(item.id)}>Save</button>
                  </div>
                ) : (
                  <>
                    <div>
                      <Tasks id={item.id} task={item.inputs} onToggle={()=>{toggleChecked(item.id)}} isChecked={item.isChecked || false}/>
                    </div>
                    <div className="EDbutton">
                      <EditIcon
                        className="edit"
                        style={{ color: "blue" }}
                        onClick={() => startEdit(item.inputs, item.id)}
                      />

                      <DeleteIcon
                        style={{ color: "red" }}
                        onClick={() => handleDelete(item.id)}
                      />
                    </div>
                  </>
                )}
              </li>
            ))}
          </ul>
        </>
      </div>
    </>
  );
}

export default App;
