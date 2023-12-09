import React from 'react'
import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import { myContext } from './composition'

function ShowBlog() {
  const params = useParams()
  const blogid = params.id
  
  const [ blogs , ] = useContext(myContext)
  return (
    <div className="showStyle">
        <h1 style={{color:'rgba(255,255,255,.8)'}}>{blogs[blogid-1].bloghead}</h1>
        <div style={{textAlign:'left',fontSize:'18px',color:'rgba(255,255,255,.7)'}}>
          {blogs[blogid-1].blogdata}
        </div>
    </div>
  )
}

export default ShowBlog