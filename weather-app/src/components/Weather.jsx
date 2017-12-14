import React from 'react'
import '../index.css'

const Weather = props => {
  console.log(props.searchData)
  return (
    <div className='weather'>
      <h3 id="city">In {props.searchData.name}, it's currently </h3>
      <h1 id="temp"> {props.searchData.main.temp}°F </h1>
      <h3> and {props.searchData.weather[0].description} </h3>
        <div className='maxmin'>
          <h2> Low: {props.searchData.main.temp_min} </h2>
          <h2> High: {props.searchData.main.temp_max} </h2>
        </div>
    </div>

  )
}


export default Weather;
