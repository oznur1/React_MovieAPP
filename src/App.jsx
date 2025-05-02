import React from 'react'
import Home from './pages/Home/Home'
import MovieDetail from "./pages/MovieDetail/MovieDetail"
import MyList from "./pages/MyList/MyList"
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import "./index.css"

const App = () => {
  return (
    <div className="app">
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/detail' element={<MovieDetail/>}/>
      <Route path='/mylist' element={<MyList/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
