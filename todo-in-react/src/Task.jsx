import { useState } from "react"

function Task() {

  const [task, setTask] = useState("");
  const [store, setStore] = useState([]);

  // Add task 
  function CreateTask(){
    if(task === ""){
      alert('Enter your Task!');
      return
    }

    const newTask = {
      id:Date.now(),
      text:task,
      completed: false
    }

    setStore([...store, newTask])
    setTask("")

  }

  // Delete Task 
  function DeleteTask(id){
    const FreshTask = store.filter((item)=>(item.id !== id))
    setStore(FreshTask)
  }

  // completed Task 
  function CompletedTask(id){
    const DoneTask = store.map((item)=>{
      if(item.id === id){
        return{
          ...item,
          completed:!item.completed
        }
      }
      return item
    })

    setStore(DoneTask)
  }

  // Edit task
  function EditTask(id){

    const newTAsk = prompt("Edit your task...")

    const ReWriteTask = store.map((item)=>{
      if(item.id === id){
        return{
          ...item,
          text: newTAsk
        }
      }
      return item
    })
    setStore(ReWriteTask)
  }

  return (
    <div>
      <input type="text"
       value={task}
        placeholder="Enter your task"
         onChange={(e)=>setTask(e.target.value)}/>

         <button onClick={CreateTask}>Add Task</button>

         <div>
          <ul>
            {store.map((items)=>(
              <li key={items.key}>

              <input type="checkbox" 
              checked={items.completed}
              onChange={()=>CompletedTask(items.id)} 
              />

                
                <span 
                style={{
                  textDecoration:items.completed ? "line-through" : "none"
                }}>
                {items.text}
                </span>

                 <button onClick={()=>EditTask(items.id)}>Edit Task</button>
                <button onClick={()=>DeleteTask(items.id)}>Delete</button>

              </li>
            ))}
          </ul>
         </div>
    </div>
  )
}

export default Task