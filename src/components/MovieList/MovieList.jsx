import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux';
import { getMovieList } from '../../redux/movielistSlice';
import MovieCard from "../MovieCard/MovieCard"
import "./MovieList.css"
const MovieList = () => {
  const dispatch=useDispatch();
  const  movieList=useSelector((state)=>state.movieList. movieList)
  
  useEffect(()=>{
dispatch(getMovieList())
  },[dispatch])
  
  
  
  return (
    <div className='Movie-List'>
      <ul>
        {
         movieList && movieList.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))
        }
      </ul>
   
  </div>
  )
}

export default MovieList
