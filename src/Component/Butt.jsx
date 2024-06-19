import axios from 'axios'
import React from 'react'

export default function Butt(props) { 
    const clickHandler=async()=>{
      try{
        const res=await axios.get(`https://api.github.com/users/${props.data}`)
        props.onChildClick(res.data);
      }
      catch(error){
         alert('data not present')
      }
    }
  return (
    <button onClick={clickHandler}>Search</button>
  )
}
