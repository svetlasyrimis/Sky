import React from 'react'


const Error = (props) => {
  
  return (
    <div className="flex-center-row">
      {props.error ? 
        <>
          <div className='top-card'>
            
            <h1>{props.error}</h1></div>
        </> : ''}
    </div>
  )
}

export default Error 