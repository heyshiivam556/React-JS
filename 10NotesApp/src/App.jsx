import { useState } from "react";
import { Trash, X } from "lucide-react";
import "./App.css";

function App() {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [task, setTask] = useState([]);
  const [expanded, setExpanded] = useState(null);

  // const means you cannot reassign the variable
  // But the array itself CAN still be modified
  // const arr = []
  // arr.push(1) // ✅ allowed
  // arr = [1]   // ❌ not allowed

  const addNote = () => {
    // let copytask =[...task]
    // copytask.push({title,details})
    // setTask(copytask)
    // console.log(copytask);

    setTask((preb) => [{ id: Date.now(), title, details }, ...preb]);

    setTitle("");
    setDetails("");
  };

  const deleteNote = (id) => {
    setTask(prev => prev.filter(item => item.id !== id))
  }
  return (
    <>
      <div className="flex flex-col md:flex-row w-full h-screen p-6"
            onClick={(e)=>{setExpanded(null)}}>
        <div className="add-notes md:mx-2 md:px-8 md:w-1/2 h-full md:border-r-2">
          <h2 className="ml-4">Add Notes</h2>
          <div className="flex flex-col gap-4 mr-">
            <input
              type="text"
              placeholder="Add Notes Title"
              className="border-2 h-10 p-2 rounded font-semibold"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
              name="details"
              placeholder="Add details here..."
              className="border-2 h-28 p-2 rounded"
              value={details}
              onChange={(e) => setDetails(e.target.value)}
            ></textarea>
            <button
              className="bg-amber-50 text-black p-2 text-[18px] font-mono font-semibold tracking-wider rounded active:scale-95 hover:bg-[#e7e5e5]"
              onClick={() => addNote()}
            >
              Add Note
            </button>
          </div>
        </div>
        <div className="recent-notes md:mx-2 md:px-8 md:w-1/2 h-full ">
          <h2 className="ml-4">Your Notes</h2>
          <div className="flex flex-wrap gap-6 gap-y-8 overflow-y-auto h-[85%]">
            
            {task.map((note) => (
              <div
                key={note.id}
                className={`relative w-45 h-60 bg-amber-50 text-black rounded-2xl p-3 
                ${expanded === note.id ? "expanded md:w-40vw md:h-90vh" : ""}`}
                onClick={(e) =>{setExpanded(note.id)
                   e.stopPropagation()
                
                }
                }
              >
                <h2
                  className="absolute top-1 right-4 bg-red-500/50 hover:bg-red-500  p-2 rounded-2xl"
                  onClick={() => deleteNote(note.id)}
                >
                  <Trash />
                  
                </h2>
                <h2></h2>
                <h3 className="font-bold">{note.title}</h3>
                <p>{note.details} </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
