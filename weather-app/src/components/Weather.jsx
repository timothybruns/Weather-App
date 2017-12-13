import React from 'react'

const Weather = props => {
  return (
    <div className='weather'>
      <h1 id="temp">Temperature: {props.weather.main.temp} </h1>
    </div>
  )
}

export default Weather;
