import React from 'react'

const Weather = props => {
  console.log(props.searchData)
  return (
    <div className='weather'>
      <h1 id="temp">Temperature: {props.searchData} </h1>
    </div>
  )
}


export default Weather;
