// displays image below selected game options
import React from 'react';

function Image({ src }) {
  return (
    <div>
      <img src={require(`../../assets/${src}`)}></img>
    </div>
  )
}

export default Image;
