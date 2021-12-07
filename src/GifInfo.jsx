import React from 'react'

const GifInfo = ({ gif }) => {

  return (
    <>
    <img src={gif[0].images.original.url} alt=""/>
    </>
  )
}

export default GifInfo