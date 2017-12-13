import React from 'react'
import Weather from './Weather'

const Search = props => {
  return (
    <div className='search'>
      {props.apiData.map(weather => {
        return (
          <Weather
            weather={weather}
          />
        );
      })}
    </div>
  )
}

export default Search;
