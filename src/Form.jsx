import React, {useState} from 'react';

function Form (props) {
  const [gifTerm, setGifTerm] = useState('')
  

  const handleChange = e => {
    const term = e.target.value
    setGifTerm(term)
  }
  
  const handleSubmit = e => {
    e.preventDefault();
    props.handleSubmit(gifTerm)
    setGifTerm('')
  }

  
  return (
    <>
    <form onSubmit={handleSubmit}>
    <input 
      id="GifTerm"
      type="text"
      value={gifTerm}
      onChange={handleChange}
      />
    <input type="submit" value="Find Gif info" />
    </form>
    </>
  )
  
}
export default Form;