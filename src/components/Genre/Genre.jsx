import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getGenres } from "../../redux/genreSlice"
import  "./genre.css"


const Genre = ({setSelectedGenre}) => {
   const dispatch=useDispatch()
   const {genres}=useSelector((store)=>store.genres)
  
useEffect(()=>{
  dispatch(getGenres())
 },[dispatch])
 console.log("Redux'taki türler:", genres)
 
 return (
  <div className='genres'>
    <ul>
      {genres && genres.map((genre, index) => (
        <li onClick={()=>setSelectedGenre(genre)} key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  </div>
)
}
export default Genre
