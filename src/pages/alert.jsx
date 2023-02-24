import React, { useEffect } from 'react'

const Alert = ({show, type, message, hideAlert}) => {
    setTimeout(()=>{
        hideAlert();
    },1100)
  return (
    <div className={`alert-box-${type}`}>
        <p>{message}</p>
    </div>
  )
}

export default Alert