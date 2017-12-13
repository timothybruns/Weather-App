import React from 'react'
import '../index.css'

const Weather = props => {
  console.log(props.searchData)
  return (
    <div className='weather'>
      <h1 id="temp">Temperature: {props.searchData.main.temp} </h1>
      <h3 id="city">City: {props.searchData.name} </h3>
        <div className='maxmin'>
          <h2> Min Temp: {props.searchData.main.temp_min} </h2>
          <h2> Max Temp: {props.searchData.main.temp_max} </h2>
          <h3> Description: {props.searchData.weather[0].description} </h3>
        </div>
    </div>

  )
}


export default Weather;
