import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getGenres } from "../../redux/genreSlice"
import  "./genre.css"


const Genre = () => {
   const dispatch=useDispatch()
   const genres=useSelector((state)=>state.genres.genres)
  
useEffect(()=>{
  dispatch(getGenres())
 },[dispatch])
 console.log("Redux'taki türler:", genres)
 
 return (
  <div className='genres'>
    <ul>
      {genres && genres.map((genre, index) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  </div>
)
}
export default Genre
