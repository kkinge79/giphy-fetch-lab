import React, { useEffect, useState } from 'react';
import './App.css';
import GifInfo from './GifInfo';
import Form from './Form'

function App() {
  const [gifData, setGifData] = useState({data:null});
  const [gifTerm, setGifTerm] = useState('')

const handleSubmit = term => {
  setGifTerm(term)
}

const reloadPage = ()=>{
  window.location.reload();

}

useEffect(() => {
  let gifUrl = `http://api.giphy.com/v1/gifs/search?api_key=y9AM67Hu4A7UfTY2vGBaB5BNcBSB5gVG&q=${gifTerm}&limit=1`;

  const makeApiCall = () => {
    fetch(gifUrl)
    .then(res => res.json())
    .then(data => {
      setGifData(data)
    })
  }
  makeApiCall()
}, [gifTerm])

  return (
      <div className="App">
        <h1>Giphy</h1>
        <Form 
          handleSubmit ={handleSubmit}
          />
      {gifData.data ? <GifInfo gif={gifData} /> : null}
      <button onClick={reloadPage}>Make API Call Again</button>
      </div>
  );
}

export default App;
