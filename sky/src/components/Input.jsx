import React from 'react';

const Input = (props) => {
    return (
      <div>
        <form action="" onSubmit={props.handleSubmit}>
          <input
            type="text"
            name={props.name}
            id="location"
            value={props.value}
            onChange={props.handleChange}
            placeholder="Search for Location"
          />
           <span role="img" aria-label="cloud">🌤️</span> 
          <button className="search-btn" >Get Forecast</button>
          </form>
      </div>
  )
}

export default Input