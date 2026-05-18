import { useState } from "react"

function NotesCard() {

    const [store, setStore] = useState([])

   

    
  return (
    <div>
        {store.map((items)=>(
            <div key={items.id}>
                <p>{items}</p>
            </div>
        ))}
    </div>
  )
}

export default NotesCard


