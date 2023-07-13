import React, { useState,useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const Fetch = ({cat}) => {
    const [Data, setData]=useState("");
    useEffect(( )=>{ axios
        .get(
        cat ?`https://newsapi.org/v2/top-headlines?country=in&category=${cat}&apiKey=fa7811399cf34c1d833186d8832df07e`
        :"https://newsapi.org/v2/top-headlines?country=in&apiKey=fa7811399cf34c1d833186d8832df07e"
        )
        .then((res)=>setData(res.data.articles));
    },[cat]);
  return (
<div className='container my-3 p-3'
style={{width:"600px",boxShadow:"2px 2px 10px silver",borderRadius:"10px"}}>
      <h3><u>TOP HEADLINES</u></h3>
      <div className='container d-flex justify-content-center align-items-center flex-column my-3' style={{minHeight:"100vh"}}>{Data ? Data.map((items,index)=><>
      <div className='container' style={{boxShadow:"2px 2px 10px silver"}}>
      <h5 className='my-2'>{items.title}</h5>
      <div className='d-flex justify-content-center align-items-center'>
        <img src={items.urlToImage}
         alt="Image not found"
          className="img-fluid " 
          style={{
            width:"100",
            height:"300px",
            objectFit:"cover",
            }}/>
        </div>
      
      <p className='my-1'>{items.content}</p>
      <Link to={items.url} target='blank'>Read More</Link>
      </div>
      </>
      ): "LOADING...."}</div>
    </div>

  )
}

export default Fetch
