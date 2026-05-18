import { useState } from "react"

function Searchbar() {

    const [task, setTask] = useState("")


  return (
    <div>
        <div className="flex justify-between items-center gap-4 h-24 bg-gray-900 text-white p-4">
            <div className="w-12 h-12 bg-gray-500 rounded-full flex items-center justify-center cursor-pointer">
                <img src="./logo.png" alt="Search" className="rounded-2xl"/>
            </div>

            <input type="text" placeholder="Search..." className="bg-gray-800 text-white placeholder:text-gray-500 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 w-lg p-2 rounded-full"/>

            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded cursor-pointer">+New Note</button>
        </div>
    </div>
  )
}

export default Searchbar