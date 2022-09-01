import React, { useEffect, useState } from 'react'; // import react and use's
import './App.css'; // import app.css file
import GalleryList from '../GalleryList/GalleryList.jsx'; //import GalleryList component
import Header from '../Header/Header'; // import Header component
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

  const likeGalleryObject = (galleryItemId) => {
    Axios({
      method: 'PUT',
      url: `/gallery/like/${galleryItemId}`,
    }).then((response) => {
      getGallery();
    }).catch((error) => {
      console.log(error);
      alert('Something went wrong');
    });
  };

  return (
    <div className="App">
      {/* Insert Header component */}
      <Header />
      {/* Insert GalleryList component and pass galleryArray props */}
      <GalleryList galleryArray={galleryArray} likeGalleryObject={likeGalleryObject} />
    </div>
  );
};

export default App; // export component