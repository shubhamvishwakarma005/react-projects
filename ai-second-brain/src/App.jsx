import NotesCard from "./Components/NotesCard"
import Searchbar from "./Components/Searchbar"
import Sidebar from "./Components/Sidebar"

function App() {


  return (
   <div className="bg-black text-white w-full h-full">
    <Searchbar />
    <Sidebar />
    <NotesCard />
   </div>
  )
}

export default App
