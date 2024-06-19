import React, {useState } from 'react'
import Butt from './Butt'
import Details from './Details'

export default function Inp() {
    const [data,setData]=useState("");
    let [info,setInfo]=useState({});
    const getInfo=(res)=>{
      setInfo({...res})
    }
  return (
    <>
      <input type="text" 
        placeholder='enterr github-id'
        onChange={e=>{setData(e.target.value)}}
        value={data}
      />
    <Butt data={data} onChildClick={getInfo}/>
      {
        info.avatar_url && <Details info={info}/>
      }
    </>
  )
}
