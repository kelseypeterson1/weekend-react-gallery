import { useEffect, useState } from 'react';
import React from 'react';
import './App.css';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList'

function App() {

  let [gallery, setGallery] = useState([]);

  const fetchGallery = () => {
    console.log('Fetching gallery')
    axios.get('/gallery')
      .then((response) => {
        console.log('GET response.data is', response.data)
        setGallery(response.data)
      }).catch((err) => {
        console.log('GET error is', err)
      })
  }

  useEffect(() => {
    fetchGallery();
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">My Gallery</h1>
      </header>
      <GalleryList 
        gallery={gallery} 
      />
    </div>
  );
}

export default App;
