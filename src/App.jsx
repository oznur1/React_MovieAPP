import React from 'react'
import Home from './pages/Home'
import MovieDetail from "./pages/MovieDetail"
import MyList from "./pages/MyList"
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
      <Route path='/list' element={<MyList/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
