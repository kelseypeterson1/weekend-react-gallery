import {useEffect, useState} from 'react';
import React from 'react';
import './App.css';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList'
import GalleryForm from '../GalleryForm/GalleryForm'


function App() {

  let [gallery, setGallery] = useState([]);

  // GET function pulls images from server
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

  // DELETE function removes images from database
  const deleteImage = (id) => {
    console.log('Delete request made it back to app.jsx. Deleting:', id)
    axios({
        method: 'DELETE',
        url: `/gallery/${id}`
    })
        .then((response) => {
            console.log('DELETE response.data is', response.data)
            fetchGallery();
        }).catch((err) => {
            console.log('DELETE error is', err)
        })
}

  // PUT function adds a like to images on the server
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


  // Images are grabbed from the server when the screen is loaded
  useEffect(() => {
    fetchGallery();
  }, [])

  // Renders to the DOM
  return (

    <div className="App">
      {/* Header */}
      <header className="App-header">
        <h1 className="App-title">My Gallery</h1>
      </header>

      {/* Input fields */}
      <GalleryForm 
        fetchGallery={fetchGallery}
      />

      {/* Gallery */}
      <GalleryList
        gallery={gallery}
        addLike={addLike}
        deleteImage={deleteImage}
      />

    </div>
  );
}

export default App;
