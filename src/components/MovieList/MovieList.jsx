import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux';
import { getMovieList } from '../../redux/movielistSlice';


const MovieList = () => {
  const dispatch=useDispatch();
  const  movieList=useSelector((state)=>state.movieList. movieList)
  
  useEffect(()=>{
dispatch(getMovieList())
  },[dispatch])
  console.log(movieList)
  
  
  return (
    <div className='Movie-List'>
    {movieList && movieList.map((movie) => (
      <div key={movie.id}>{movie.title}</div>
    ))}
  </div>
  )
}

export default MovieList
