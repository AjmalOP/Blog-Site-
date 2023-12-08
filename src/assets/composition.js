import React , { createContext , useState } from 'react'
import { Route , Routes } from 'react-router-dom'
import NavPage from './NavPage'
import Home from './Home'
import CreateBlog from './CreateBlog'
import ListBlog from './ListBlog'
import ShowBlog from './ShowBlog'
import NoMatch from './NoMatch'

export const myContext = createContext()

function Composition() {

  const [ blogs , setBlogs ] = useState([])

  return (
    <>
    <myContext.Provider value={[ blogs , setBlogs ]}>
      <NavPage />
      <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='create' element={<CreateBlog/>}/>
          <Route path='list' element={<ListBlog/>}/>
          <Route path='show/:id' element={<ShowBlog/>}/>
          <Route path='*' element={<NoMatch/>}/>
      </Routes>
    </myContext.Provider>
    </>
  )
}

export default Composition