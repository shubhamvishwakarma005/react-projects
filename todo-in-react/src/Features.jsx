import { useState } from "react";

function Features() {

  const [task, setTask] = useState("");
  const [store, setStore] = useState([]);

  console.log(store)
  // Add task
  function StoreTask() {
    if (task === "") {
      alert("Please enter a task");
      return;
    }

    const newTask = {
      id: Date.now(),
      text: task,
      completed: false
    };

    setStore([...store, newTask]);
    setTask("");
  }

  // Delete task
  function DeleteTask(id) {

    const filteredTask = store.filter((item) => item.id !== id);
    setStore(filteredTask);
    
  }

  // Complete task
  function CompleteTask(id) {

    const updatedTask = store.map((item) => {

      if (item.id === id) {
        return {
          ...item,
          completed: !item.completed
        };
      }                                                            

      return item;
    });

    setStore(updatedTask);
  }


  return (
    <div>

      <input
        type="text"
        value={task}
        placeholder="Enter your task"
        onChange={(e) => setTask(e.target.value)}
      />

      <button onClick={StoreTask}>
        Add Task
      </button>

      <ul>

        {store.map((item) => (

          <li key={item.id}>

            <input
              type="checkbox"
              checked={item.completed}
              onChange={() => CompleteTask(item.id)}
            />

            <span
              style={{
                textDecoration: item.completed
                  ? "line-through"
                  : "none"
              }}
            >
              {item.text}
            </span>

            <button
              onClick={() => DeleteTask(item.id)}
            >
              Delete
            </button>

          </li>
        ))}

      </ul>

    </div>
  );
}

export default Features;