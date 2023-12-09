import React, { useRef , useContext } from 'react'
import { myContext } from './composition'
import { useNavigate } from 'react-router-dom'

function CreateBlog() {
  const [ blogs , setBlogs ] = useContext(myContext)
  const BlogHeading = useRef(null)
  const BlogData = useRef(null)
  const NavigateToSeePost = useNavigate()

  function postBlog (){
    BlogHeading && BlogData && setBlogs([...blogs,{
      id:blogs.length + 1 ,
      bloghead:BlogHeading.current.value ,
      blogdata:BlogData.current.value
    }])
    BlogHeading.current.value=''
    BlogData.current.value=''
    window.alert("Your Blog Is Successfully Posted.")
  }
  

  return (
    <>
    <h1 style={{fontSize:'40px',color:'rgba(255,255,255,0.5)'}}>Start Creating Your Own Blog</h1>
    <div style={{textAlign:'left' ,padding:'10px' , margin:'20px'}}>
        <label style={{marginBottom:'10px' ,color:'white'}}><b>Name Your Blog:</b></label><br />
        <input type="text" style={{width:'100%' , height:'4vh' ,marginTop:'10px' ,border:'2px solid white', backgroundColor:'rgb(40 ,40 ,40)',color:'white',fontSize:'20px'}} ref={BlogHeading}/><br/><br/>
        <label style={{color:'white'}}><b>Create Your Content :</b></label><br />
        <textarea style={{width:'100%' , height:'30vh' , marginTop:'10px' ,border:'2px solid white',backgroundColor:'rgb(40 ,40 ,40)',color:'white',fontSize:'18px'}} ref={BlogData}/><br/><br/>
    </div>
    <button style={{backgroundColor:'black',border:'1px solid rgb(100, 40, 40)', padding:'8px' , borderRadius:'8px' , color:'white' , fontSize:'15px'}} onClick={postBlog}><b>Post Now</b></button>
    <button onClick={()=>NavigateToSeePost('/list')} style={{backgroundColor:'black',border:'1px solid rgb(100, 40, 40)', padding:'8px' , borderRadius:'8px' , color:'white' , fontSize:'15px' , marginLeft:'30px'}}><b>See  Your Post</b></button>
    </>
  )
}

export default CreateBlog