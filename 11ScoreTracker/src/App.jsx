import { Search } from "lucide-react";
import "./App.css";
import { useState } from "react";

function App() {
  
const [match, setMatch] = useState([])

  return (
    <>
      <div>
        <h1 className="text-center">Luchi Kumari</h1>
        <div className="searchbar flex flex-row mt-4 mx-auto">
          <input
            type="text"
            className="w-64 h-10 p-2 bg-amber-50 text-black m-2 rounded "
          />
          <button>
            <Search size={20} />
          </button>
        </div>
        <div className=" flex justify-center mt-10">
          <div className="match w-full text-center">
            <div className=" bg-amber-900 ">
              <span>Atlas</span> v/s <span>Nombre</span>
            </div>
            <ul className="scores flex justify-evenly">
              <li className="absolute left-2">27-03</li>
              <li>4</li>
              <li>3</li>
            </ul>
            <ul className="scores flex justify-evenly">
              <li className="absolute left-2">28-03</li>
              <li>5</li>
              <li>2</li>
            </ul>
            <div>
              <div className="total mt-2">
                <ul className=" flex justify-evenly">
                  <li className="absolute left-2 ">Total</li>
                  <li>3</li>
                  <li>2</li>
                  <li className="absolute right-4">3</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
