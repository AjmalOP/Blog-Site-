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

  const [ blogs , setBlogs ] = useState([{
    id:1 ,
    bloghead:'Brain of Brian',
    blogdata:'The Brain of Brian is a digital comic book that has been turned into a serialized blog. Each post contains a new edition of the custom-illustrated and entertaining story. This graphics-driven website and blog is so enjoyable to peruse. From the storytelling snippets above the fold to the individual comic book posts down below, the content is uniquely colorful and hilarious. You can tell that the artist put a lot of time into designing this website.'
  },{
    id:2 ,
    bloghead:'Brit-Dot-Design',
    blogdata:'Brit Arnesen created britdotdesign to share her DIY home decor and renovation projects. Its classy design and beautifully shot imagery entice homeowners seeking tips. The conversational-style writing keeps them engaged, leaving them eager to find the subscriber form. The footer of this site is worth checking out. It features a full-width Instagram feed, which is the perfect addition to any design blog. Below that is a subscriber form that invites readers to stay connected. Last but not least, it includes a link to book a consultation with Brit. '
  }])

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