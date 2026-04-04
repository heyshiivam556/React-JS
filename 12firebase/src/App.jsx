import { useEffect, useState } from "react";
import "./App.css";
import Auth from "./components/Auth";
import { db, auth } from "./config/firebase";
import { addDoc, collection, deleteDoc, getDocs , doc, updateDoc } from "firebase/firestore";

function App() {
  const [movies, setMovies] = useState([]);
  const [movieName, setMovieName] = useState('')
  const [releaseDate, setReleaseDate] = useState('')
  const [rating, setRating] = useState(0)
  const [watched, setWatched] = useState(false)
  const [edit, setEdit] = useState(null)

  const getMovieList = async () => {
      try {
        const data = await getDocs(moviesCollectionRef);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        console.log(filteredData);

        setMovies(filteredData);
      } catch (err) {
        console.error(err);
      }
    };

  useEffect(() => {
    getMovieList();
  }, []);

  const moviesCollectionRef = collection(db, "movies");

  const addMovies = async ()=>{
    try {
      
    
    if(edit){
      const moviedoc = doc(db,"movies",edit)
      await updateDoc(moviedoc,{
      title: movieName,
      releaseDate: releaseDate,
      rating: rating,
      watched: watched,
      userId: auth?.currentUser?.uid,
      })
      setEdit(null)
    }
    else{
    await addDoc(moviesCollectionRef,{
      title: movieName,
      releaseDate: releaseDate,
      rating: rating,
      watched: watched,
      userId: auth?.currentUser?.uid,
    })
  }
  } catch (error) {
      console.log(error)
    }
  setMovieName('')
  setReleaseDate('')
  setRating(0)
  setWatched(false)
  getMovieList();
}
  const deleteMovie = async (id)=>{
    const moviedoc = doc(db,"movies",id)
    await deleteDoc(moviedoc)
    getMovieList()
  }
   const editMovie = async (movie) =>{
    setMovieName(movie.title)
    setReleaseDate(movie.releaseDate)
    setRating(movie.rating)
    setWatched(movie.watched)
    setEdit(movie.id)
   }

  return (
    <><div className="flex  ">
    <div>
      <h1 className="mb-4">firebase Project</h1>
      <Auth />
    </div><div className="m-6 ml-20 mt-15 w-64">
      <h2>Movie list</h2>
      {movies.map((movie) => (
        <div className=" bg-emerald-900 rounded-2xl mt-6" style={{backgroundColor: movie.watched == false ? '#fb453a':''}}>
          <h2 className="text-2xl">{movie.title}</h2>
          <ul>
          <li>rating : {movie.rating}⭐</li>
          <li>release Date : {movie.releaseDate}</li>
          <li>Watched: {movie.watched == true ? 'Yes' : 'No'}</li>
          </ul>
          <button className="w-20 h-10 bg-fuchsia-800 " onClick={()=>editMovie(movie)} >Edit</button>
          <button className="w-20 h-10 bg-red-600 " onClick={()=>deleteMovie(movie.id)}>delete</button>
        </div>
        
      ))}
      </div>

      <div className="flex flex-col ml-20 mt-15">
        <h2 className="mb-4">Add movies</h2>
        <input type="text" required onChange={(e)=>setMovieName(e.target.value)} value={movieName} className='h-10 bg-black m-1 p-2 rounded'  placeholder="Enter movie Name"/>
        <input type="number" onChange={(e)=>setReleaseDate(Number(e.target.value))} value={releaseDate} className='h-10 bg-black m-1 p-2 rounded' placeholder="Enter release Date"/>
        <input type="number" onChange={(e)=>setRating(e.target.value)} value={rating} className='h-10 bg-black m-1 p-2 rounded' placeholder="Enter Rating"/>
        <label htmlFor="" onChange={(e)=>setWatched(e.target.checked)} value={watched}>Watched : <input type="checkbox" /></label>
        <button className="bg-amber-600" onClick={addMovies}>{edit ? 'Update':'+Add'}</button>
        <p className="text-red-500"></p>
      </div>
      </div>
    </>
  );
}

export default App;
