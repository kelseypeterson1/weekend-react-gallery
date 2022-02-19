import {useEffect, useState} from 'react';
import React from 'react';
import './App.css';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList'
import GalleryForm from '../GalleryForm/GalleryForm'

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


  const addLike = (item) => {
    console.log('addLike function made it back to app.jsx with id', item.id)
    let newCount = item.likes + 1;
    axios.put(`/gallery/${item.id}`, {likes: newCount})
      .then(response => {
        fetchGallery();
      })
      .catch(err => {
        console.log('Error updating likes', err);
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
      <GalleryForm 
        fetchGallery={fetchGallery}
      />
      <GalleryList
        gallery={gallery}
        addLike={addLike}
      />
    </div>
  );
}

export default App;
