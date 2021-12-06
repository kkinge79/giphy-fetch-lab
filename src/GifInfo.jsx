import React from 'react';

const GifInfo = ({ gif })  => {
  return (
<>
      <img src={gif.data.images.original.url} alt="gif"/>
</>
  )
}

export default GifInfo