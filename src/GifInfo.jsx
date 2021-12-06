import React from 'react';

const GifInfo = ({ gif })  => {
  let url = ''
  gif.data.forEach((element) => {
    url = element.images.original.url
  })
  
  return (
    <>
    <img src={url} alt=""/>
    </>
  )
}

export default GifInfo