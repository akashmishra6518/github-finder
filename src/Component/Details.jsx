import React from 'react'
export default function Details(props) {
  return(
    <>
      {
        props.info.avatar_url && 
        <div>
          <img src={props.info.avatar_url} alt="profile image"/>
        </div>
      }
    </>
  )
}
