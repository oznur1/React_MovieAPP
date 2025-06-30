import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux';
import { getMovieList } from '../../redux/slices/movieListSlice';
import MovieCard from "../MovieCard/MovieCard"
import "./MovieList.css"
import Loading from '../Loading/loading';
import Error from '../Navbar/Error';



const MovieList = ({selectedGenre}) => {
  const dispatch=useDispatch();
  const {movieList,status,error}=useSelector((state)=>state.movieList. movieList)
 

    useEffect(() => {
    setItemOffset(0); // Tür değiştiğinde sayfayı sıfırla
    if (!selectedGenre) { // tür seçilmemişse selectedGenre: null --> false
      dispatch(getMovieList())
      console.log("Tür seçilmedi. getMovieList() çalisti...");
    } else {
      dispatch(getMovieListByGenre(selectedGenre.id))
      console.log("Tür seçildi. getMovieListByGenre() çalisti...", selectedGenre);
    }
  }, [selectedGenre, dispatch])  // her render'da ve seçili tür id'sini tutan state her değiştiğinde çalışır.  


  
  
  
  return (
    <div className='movie-List'>
      <ul>
        {
          status==="fulfilled"?
         movieList && movieList.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        )) :
        status==="pending"?
        <Loading/> :
        
        <Error error={error}/>
        }
      </ul>
   
  </div>
  )
}

export default MovieList
