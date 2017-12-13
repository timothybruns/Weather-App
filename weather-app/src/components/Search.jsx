import React from 'react'
import Weather from './Weather'

const Search = props => {
  return (
    <div className='search'>
      <Weather
        searchData={props.weatherData}
      />
    </div>
  );
};

export default Search;
