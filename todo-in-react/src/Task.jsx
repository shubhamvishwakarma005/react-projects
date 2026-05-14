import  { useState } from 'react'

function Task() {
const [task, setTask] = useState("")
const [store, setStore] = useState([])

// add task 
function CreateTask(){
  if(task === ""){
    alert("Enter your task!")
    return;
  }

  const newTask ={
    id:Date.now(),
    text:task,
    completed:false
  }

  setStore([...store, newTask])
  setTask("")

}


  // Delete task 
  function DeleteTask(id){
    const FilterTask = store.filter((items)=>(items.id !== id))
     setStore(FilterTask)
  }


  // Completed task 
  function CheckedTask(id){
    const markedTask = store.map((items)=>{
      if(items.id === id){
        return{
          ...items, completed:!items.completed
        }
      }
      return items
    })

    setStore(markedTask)
  }



  return (
    <div>
      <input type="text" value={task} placeholder='Enter your task' onChange={(e)=>setTask(e.target.value)}/>
      <button onClick={CreateTask}>Add task</button>

      <ul>
        {store.map((item)=>(
          <li key={item.id}>

            <input type="checkbox"  
             checked={item.completed}
             onChange={()=>CheckedTask(item.id)}
            />

            <span 
                style={{
                  textDecoration: item.completed ? "line-through" : "none"
                }} 
            >
               {item.text}
            </span>

            <button onClick={()=>DeleteTask(item.id)}>Delete</button>

            <span></span>

          </li>
        ))}
      </ul>

    </div>
  )
}

export default Task