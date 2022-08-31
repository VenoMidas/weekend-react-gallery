import React, { useEffect, useState } from 'react'; // import react and use's
import './App.css'; // import app.css file
import GalleryList from '../GalleryList/GalleryList.jsx'; //import GalleryList component
import Axios from 'axios'; //import axios for server routes

function App() {
  // getters and setters
  let [galleryArray, setGalleryArray] = useState([]);

  // useEffect runs on page load
  useEffect(() => {
    // console.log('in useEffect');
    getGallery();
  });

  /**
   * GET /gallery data
   * setGalleryArray with gallery data
   */
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
      {/* Insert GalleryList component and pass galleryArray props */}
      <GalleryList galleryArray={galleryArray} />
    </div>
  );
};

export default App;