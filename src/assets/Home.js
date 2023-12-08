import React from 'react'
import { useNavigate } from 'react-router-dom'

let Home = ()=>{
    const NavigateToCreate = useNavigate()
    return (
        <div style={{marginTop:'250px'}}>
        <h3 style={{color:'white'}}>Here We Create and Share Your Blog...</h3>
        <h1 style={{color:'yellow'}}><span style={{color:'red'}}>Create</span><i> Your On Blog </i><span style={{color:'green'}}>With Us</span></h1>
            <button onClick={()=>NavigateToCreate('/create')} style={{backgroundColor:'black',border:'1px solid rgb(100, 40, 40)', padding:'8px' , borderRadius:'8px' , color:'white' , fontSize:'15px'}}><b>Create New Blog</b></button>
        </div>
    )
}

export default Home