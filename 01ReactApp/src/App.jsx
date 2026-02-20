import Shivam  from "./Shivam"

function App(){
let usr = 'SHIIVAM'
  return(
    <div>
     <Shivam/>
    <p>i am p from app.js</p>
    <p>this is how variables are injected : {usr}</p>
     </div>
  )
}
export default App