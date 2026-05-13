import { useState } from "react";

function Task() {
  const [task, setTask] = useState("");
  const [store, setStore] = useState([]);
  const [select , setSelect] = useState(false)

  function CreateTask() {
    if (task === "") {
      alert("Enter your task !");
      return;
    }

    setStore([...store, task]);
    setTask("");
  }

    function DeleteTask(index) {
        const newStore = [...store];
        newStore.splice(index, 1);
        setStore(newStore);
    }


    function MarkChecked(){
        setSelect(true);
        if(select === true){
            alert("Task Completed !");
        }
    }


  return (
    <div>
      <input
        type="text"
        placeholder="Enter Your task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button onClick={CreateTask}>Add Task</button>

      <ul>
        {store.map((task, index) => (
          <li key={index} style={{ textDecoration: select ? "line-through" : "none",  color: select ? "red" : "green"} }>
            <input type="checkbox"  onChange={(event)=>MarkChecked(event.target.checked)} />
            {task} <button onClick={() => DeleteTask(index)}>Delete</button>
           
          </li>
        ))}
      </ul>

    </div>
  );
}

export default Task;
