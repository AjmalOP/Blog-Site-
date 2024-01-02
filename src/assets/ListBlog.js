import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { myContext } from './composition'

function ListBlog() {
  const [ blogs ,  ] = useContext(myContext)
  const navigate = useNavigate()
  return (
    <div>
      <ul style={{ listStyleType: 'none' }}>
                {blogs.map(blog => (
                    <li key={blog.id}>
                      <button onClick={()=> navigate(`/show/${blog.id}`)} style={{border:'0' , backgroundColor:'rgba(0,0,0,0)',color:'white'}}><h1>➡️ {blog.bloghead}</h1></button>
                    </li>
                ))}
      </ul>
    </div>
  )
}

export default ListBlog