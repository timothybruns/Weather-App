import React from 'react';
import Search from './Search';

const Body = props => {
  return (
    <div className='body'>
      {props.apiData.map(weather => {
        return (
          <Weather />
        );
      })}
    </div>
  )
}

export default Body;
