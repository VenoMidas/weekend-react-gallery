import React, { useEffect, useState } from 'react';
import './App.css';
import GalleryList from '../GalleryList/GalleryList.jsx';
import GalleryItem from '../GalleryItem/GalleryItem.jsx';
import Axios from 'axios';

function App() {
  // getters and setters
  let [galleryArray, setGalleryArray] = useState([]);

  // useEffect runs on page load
  useEffect(() => {
    // console.log('in useEffect');
    getGallery();
  });

  const getGallery = () => {
    Axios({
      method: 'GET',
      url: '/gallery',
    }).then(response => {
      setGalleryArray(response.data);
      // console.log(galleryArray);
    }).catch(error => {
      console.log(error);
      alert('Something went wrong!');
    });
  };

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <GalleryList galleryArray={galleryArray} />
        <GalleryItem />
      </div>
    );
}

export default App;
