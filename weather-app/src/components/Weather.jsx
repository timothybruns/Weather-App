import React from 'react'
import Info from './Body'

const Weather = props => {
  return (
    <div className='weather'>
      <h2 id="city">City: {props.weather.name} </h2>
      <h1 id="temp">Temperature: {props.weather.main.temp} <h1>
      <h3 id="decription"> {props.weather.weather.description} </h3>
    </div>
  )
}

export default Weather;
